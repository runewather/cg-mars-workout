export interface Workout {
  id?: number | string | 0;
  title?: string | "";
  description?: string | "";
  levelTag?: string | "";
  impactTag?: string | "";
  thumbnail?: string | "";
  media?: string | "";
  duration?: string | number | "";
  trainerId?: string | number | 0;
}
