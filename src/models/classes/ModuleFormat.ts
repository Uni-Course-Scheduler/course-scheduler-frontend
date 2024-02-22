import { ModuleFormatEnum } from "@/models/enums/ModuleFormatEnum";
import type { ModuleFormatEnum as ModuleFormatType } from "@/models/enums/ModuleFormatEnum";
import type { ModuleFormatEvent } from "@/models/classes/ModuleFormatEvent";
export class ModuleFormat {
  constructor(
    id: number,
    title: string,
    sws: number,
    credits: number,
    language: string,
    type: ModuleFormatEnum,
  ) {
    this.id = id;
    this.title = title;
    this.sws = sws;
    this.credits = credits;
    this.language = language;
    this.type = type;
    this.event = null;
  }

  /** @var id number of the module */
  private id: number;

  /** @var title of the module */
  private title: string;

  /** @var sws amount of hours per week */
  private sws: number;

  /** @var credits format credits */
  private credits: number;

  /** @var language of the format */
  private language: string;

  /** @var type of the format */
  private type: ModuleFormatType;

  /** @var events of the format */
  private event: ModuleFormatEvent | null;

  public getEvent(): ModuleFormatEvent | null{
    return this.event;
  }

  public setEvent(event: ModuleFormatEvent): void {
    this.event = event;
  }

  /**
   * Get the title of the module format
   *
   * @return string
   */
  public getTitle(): string {
    return this.title;
  }

  /**
   * Set the title of the module format
   *
   * @param title - The title to set
   * @return void
   */
  public setTitle(title: string): void {
    this.title = title;
  }

  /**
   * Get the id of the module format
   *
   * @return number
   */
  public getId(): number {
    return this.id;
  }

  /**
   * Set the id of the module format
   *
   * @param id - The id to set
   * @return void
   */
  public setId(id: number): void {
    this.id = id;
  }

  /**
   * Get the sws of the module format
   *
   * @return number
   */
  public getSws(): number {
    return this.sws;
  }

  /**
   * Set the sws of the module format
   *
   * @param sws - The sws to set
   * @return void
   */
  public setSws(sws: number): void {
    this.sws = sws;
  }

  /**
   * Get the credits of the module format
   *
   * @return number
   */
  public getCredits(): number {
    return this.credits;
  }

  /**
   * Set the credits of the module format
   *
   * @param credits - The credits to set
   * @return void
   */
  public setCredits(credits: number): void {
    this.credits = credits;
  }

  /**
   * Get the language of the module format
   *
   * @return string
   */
  public getLanguage(): string {
    return this.language;
  }

  /**
   * Set the language of the module format
   *
   * @param language - The language to set
   * @return void
   */
  public setLanguage(language: string): void {
    this.language = language;
  }

  /**
   * Get the type of the module format
   *
   * @return ModuleFormatType
   */
  public getType(): ModuleFormatType {
    return this.type;
  }

  /**
   * Set the type of the module format
   *
   * @param type - ModuleFormatType
   * @return void
   */
  public setType(type: ModuleFormatType): void {
    this.type = type;
  }
}
