// ============================================================
// EMAIL VALIDATION
// ============================================================

export const isValidEmail = (email: string): boolean => {
  const value = email.trim();

  if (!value) {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(value);
};

// ============================================================
// NAME VALIDATION
// ============================================================

export const isValidName = (name: string): boolean => {
  const value = name.trim();

  // Required
  if (!value) {
    return false;
  }

  // Minimum 2 characters
  if (value.length < 2) {
    return false;
  }

  // Maximum 100 characters
  if (value.length > 100) {
    return false;
  }

  /*
   * Allow:
   * - English letters
   * - Accented letters
   * - Spaces
   * - Hyphen
   * - Apostrophe
   *
   * Do NOT allow:
   * - Numbers
   * - @
   * - #
   * - $
   * - %
   * - Other special characters
   */
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;

  return nameRegex.test(value);
};

// ============================================================
// PHONE VALIDATION
// ============================================================

export const isValidPhone = (phone: string): boolean => {
  // Phone is optional
  if (!phone.trim()) {
    return true;
  }

  const value = phone.trim();

  /*
   * Allows:
   * +91 9876543210
   * +919876543210
   * 9876543210
   * 98765-43210
   *
   * After removing spaces/hyphens/dots,
   * only 7–15 digits are allowed.
   */

  const cleanPhone = value.replace(/[\s.-]/g, "");

  const phoneRegex = /^\+?[0-9]{7,15}$/;

  return phoneRegex.test(cleanPhone);
};

// ============================================================
// REQUIRED FIELD VALIDATION
// ============================================================

export const isNotEmpty = (
  val: string,
  minLength = 1
): boolean => {
  return (
    typeof val === "string" &&
    val.trim().length >= minLength
  );
};