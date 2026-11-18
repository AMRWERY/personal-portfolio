export interface Props {
  /** id of the control inside the slot; used for the label and error wiring */
  id: string;
  label: string;
  required?: boolean;
  /** Shows a muted "Optional" hint next to the label */
  optionalLabel?: string;
  /** Validation message; the field is treated as invalid when set */
  error?: string;
}
