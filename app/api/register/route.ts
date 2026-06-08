import { NextResponse } from 'next/server';
import { insertLead, isSupabaseConfigured } from '@/lib/supabase/server';

interface RegisterBody {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  isBroker?: string;
  source?: string;
  page_path?: string;
  form_type?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  timestamp?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as RegisterBody;

  const {
    firstName,
    lastName,
    email,
    phone,
    isBroker,
    source,
    page_path,
    form_type,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
    timestamp,
  } = body ?? {};

  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !phone?.trim()) {
    return NextResponse.json({ error: 'All required fields must be provided.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
  }

  const lead = {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    isBroker: isBroker?.trim() ?? '',
    source: source?.trim() || 'hawthorneeastvillagemilton.com',
    page_path: page_path?.trim() || '/',
    form_type: form_type?.trim() || 'hero',
    utm_source: utm_source?.trim() ?? '',
    utm_medium: utm_medium?.trim() ?? '',
    utm_campaign: utm_campaign?.trim() ?? '',
    utm_term: utm_term?.trim() ?? '',
    utm_content: utm_content?.trim() ?? '',
    timestamp: timestamp ?? new Date().toISOString(),
  };

  if (isSupabaseConfigured()) {
    const saved = await insertLead({
      first_name: lead.firstName,
      last_name: lead.lastName,
      email: lead.email,
      phone: lead.phone,
      is_broker: lead.isBroker,
      source: lead.source,
      page_path: lead.page_path,
      form_type: lead.form_type,
      utm_source: lead.utm_source,
      utm_medium: lead.utm_medium,
      utm_campaign: lead.utm_campaign,
      utm_term: lead.utm_term,
      utm_content: lead.utm_content,
    });

    if (!saved.ok) {
      return NextResponse.json(
        { error: 'Could not save your registration. Please try again shortly.' },
        { status: 500 },
      );
    }
  } else {
    console.warn(
      '[registration] SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY not set — lead not persisted to database.',
    );
  }

  const webhookUrl = process.env.REGISTRATION_WEBHOOK_URL ?? process.env.PUBLIC_N8N_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
    } catch {
      console.error('[registration] Webhook delivery failed for lead:', lead.email);
    }
  } else if (!isSupabaseConfigured()) {
    console.info('[registration]', JSON.stringify(lead));
    return NextResponse.json({ error: 'Lead capture is not configured.' }, { status: 503 });
  }

  return NextResponse.json({ ok: true });
}
