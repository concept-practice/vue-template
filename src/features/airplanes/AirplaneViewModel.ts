import type ITableHeader from "@/components/elements/table/ITableHeader";
import { type AirplaneResponse, defaultAirplaneResponse } from "./AirplaneResponse";

export default class AirplaneViewModel implements ITableHeader {
  private _registration: string;
  private _manufacturer: string;
  private _model: string;
  private _range: number;
  private _capacity: number;

  public constructor(response: AirplaneResponse) {
    this._registration = response.registration;
    this._manufacturer = response.manufacturer;
    this._model = response.model;
    this._range = response.range;
    this._capacity = response.capacity;
  }

  public get registration(): string {
    return this._registration;
  }

  public get manufacturer(): string {
    return this._manufacturer;
  }

  public get model(): string {
    return this._model;
  }

  public get range(): number {
    return this._range;
  }

  public get capacity(): number {
    return this._capacity;
  }

  public toHeader(): Array<string> {
    return ["Registration", "Manufacturer", "Model", "Range", "Capacity"];
  }

  public static defaultViewModel(): AirplaneViewModel {
    return new AirplaneViewModel(defaultAirplaneResponse());
  }
}
