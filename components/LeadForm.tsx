'use client';

import { FormEvent, useState } from 'react';
import {
  submitLead,
  validateEmail,
  validatePhone,
  normalizePhone,
} from '@/src/utils/form';

interface LeadFormProps {
  id?: string;
  variant?: 'hero' | 'modal' | 'register' | 'inline';
  formType?: string;
  ctaLabel?: string;
}

export function LeadForm({
  id = 'lead-form',
  variant = 'hero',
  formType = 'hero',
  ctaLabel = 'Get VIP Pricing & Floor Plans',
}: LeadFormProps) {
  const [formError, setFormError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const formClass =
    variant === 'hero'
      ? 'space-y-4'
      : variant === 'register'
        ? 'mx-auto max-w-lg space-y-4'
        : 'space-y-4';

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError('');
    setFieldErrors({});

    const fd = new FormData(e.currentTarget);
    const firstName = (fd.get('firstName') as string)?.trim();
    const lastName = (fd.get('lastName') as string)?.trim();
    const email = (fd.get('email') as string)?.trim();
    const phone = (fd.get('phone') as string)?.trim();
    const isBroker = (fd.get('isBroker') as string) || undefined;

    const errors: Record<string, string> = {};
    if (!firstName) errors.firstName = 'First name is required.';
    if (!lastName) errors.lastName = 'Last name is required.';
    if (!email || !validateEmail(email)) errors.email = 'Enter a valid email address.';
    if (!phone || !validatePhone(phone)) errors.phone = 'Enter a valid 10-digit phone number.';
    if (!isBroker) errors.isBroker = 'Please select Yes or No.';

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    try {
      await submitLead(
        { firstName, lastName, email, phone: normalizePhone(phone), isBroker },
        formType,
      );
      const params = new URLSearchParams(window.location.search);
      params.set('registered', '1');
      window.location.href = `/thank-you/?${params.toString()}`;
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form id={id} className={formClass} noValidate onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-first`} className="mb-1 block text-sm font-medium text-forest-dark">
            First name <span className="text-forest-accent">*</span>
          </label>
          <input
            type="text"
            id={`${id}-first`}
            name="firstName"
            required
            autoComplete="given-name"
            className="input-field"
            aria-describedby={`${id}-first-error`}
            aria-invalid={!!fieldErrors.firstName}
          />
          {fieldErrors.firstName && (
            <p id={`${id}-first-error`} className="mt-1 text-sm text-red-700" role="alert">
              {fieldErrors.firstName}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${id}-last`} className="mb-1 block text-sm font-medium text-forest-dark">
            Last name <span className="text-forest-accent">*</span>
          </label>
          <input
            type="text"
            id={`${id}-last`}
            name="lastName"
            required
            autoComplete="family-name"
            className="input-field"
            aria-describedby={`${id}-last-error`}
            aria-invalid={!!fieldErrors.lastName}
          />
          {fieldErrors.lastName && (
            <p id={`${id}-last-error`} className="mt-1 text-sm text-red-700" role="alert">
              {fieldErrors.lastName}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-email`} className="mb-1 block text-sm font-medium text-forest-dark">
          Email <span className="text-forest-accent">*</span>
        </label>
        <input
          type="email"
          id={`${id}-email`}
          name="email"
          required
          autoComplete="email"
          className="input-field"
          aria-describedby={`${id}-email-error`}
          aria-invalid={!!fieldErrors.email}
        />
        {fieldErrors.email && (
          <p id={`${id}-email-error`} className="mt-1 text-sm text-red-700" role="alert">
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${id}-phone`} className="mb-1 block text-sm font-medium text-forest-dark">
          Phone <span className="text-forest-accent">*</span>
        </label>
        <input
          type="tel"
          id={`${id}-phone`}
          name="phone"
          required
          autoComplete="tel"
          placeholder="647-555-1234"
          className="input-field"
          aria-describedby={`${id}-phone-error`}
          aria-invalid={!!fieldErrors.phone}
        />
        {fieldErrors.phone && (
          <p id={`${id}-phone-error`} className="mt-1 text-sm text-red-700" role="alert">
            {fieldErrors.phone}
          </p>
        )}
      </div>

      <fieldset className="text-forest-dark" aria-describedby={`${id}-broker-error`}>
        <legend className="mb-2 text-sm font-medium text-forest-dark">
          Are you a broker? <span className="text-forest-accent">*</span>
        </legend>
        <div className="flex gap-6 text-sm text-forest-dark">
          <label className="flex cursor-pointer items-center gap-2 font-medium text-forest-dark">
            <input type="radio" name="isBroker" value="Yes" required className="h-4 w-4 accent-forest-accent" />
            <span>Yes</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2 font-medium text-forest-dark">
            <input type="radio" name="isBroker" value="No" required className="h-4 w-4 accent-forest-accent" />
            <span>No</span>
          </label>
        </div>
        {fieldErrors.isBroker && (
          <p id={`${id}-broker-error`} className="mt-1 text-sm text-red-700" role="alert">
            {fieldErrors.isBroker}
          </p>
        )}
      </fieldset>

      {formError && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
          {formError}
        </p>
      )}

      <button type="submit" className="btn-gold w-full" disabled={loading}>
        {loading ? 'Sending…' : ctaLabel}
      </button>

      {variant === 'hero' && (
        <p className="text-center text-xs text-forest-mid/80">
          Platinum VIP access — register before public launch. We do not represent the builder.
        </p>
      )}
    </form>
  );
}
