import { ValueDefaults } from "@/utilities/ValueDefaults";

export interface AirplaneResponse {
  registration: string;
  manufacturer: string;
  model: string;
  range: number;
  capacity: number;
}

export function defaultAirplaneResponse(): AirplaneResponse {
  return {
    registration: ValueDefaults.String,
    manufacturer: ValueDefaults.String,
    model: ValueDefaults.String,
    range: ValueDefaults.Number,
    capacity: ValueDefaults.Number,
  };
}
