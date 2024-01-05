
export interface Country {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages:    { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    DZD?: Ang;
    EUR?: Ang;
    PGK?: Ang;
    AUD?: Ang;
    ERN?: Ang;
    CDF?: Ang;
    ANG?: Ang;
    MKD?: Ang;
    EGP?: Ang;
    ILS?: Ang;
    JOD?: Ang;
    YER?: Ang;
    PKR?: Ang;
    BRL?: Ang;
    ZMW?: Ang;
    GBP?: Ang;
    SHP?: Ang;
    USD?: Ang;
    KZT?: Ang;
    LKR?: Ang;
    MDL?: Ang;
    MUR?: Ang;
    ARS?: Ang;
    XCD?: Ang;
    XOF?: Ang;
    SOS?: Ang;
    KGS?: Ang;
    SYP?: Ang;
    TJS?: Ang;
    VES?: Ang;
    RUB?: Ang;
    BND?: Ang;
    SGD?: Ang;
    PLN?: Ang;
    CLP?: Ang;
    LSL?: Ang;
    ZAR?: Ang;
    KID?: Ang;
    BAM?: BAM;
    GEL?: Ang;
    ETB?: Ang;
    DOP?: Ang;
    JEP?: Ang;
    BYN?: Ang;
    TND?: Ang;
    IMP?: Ang;
    KRW?: Ang;
    OMR?: Ang;
    FKP?: Ang;
    AWG?: Ang;
    JMD?: Ang;
    RON?: Ang;
    STN?: Ang;
    BSD?: Ang;
    TTD?: Ang;
    UZS?: Ang;
    TMT?: Ang;
    HUF?: Ang;
    NZD?: Ang;
    CRC?: Ang;
    BGN?: Ang;
    SEK?: Ang;
    DKK?: Ang;
    FOK?: Ang;
    PYG?: Ang;
    BOB?: Ang;
    GGP?: Ang;
    FJD?: Ang;
    NOK?: Ang;
}

export interface Ang {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toCountry(json: string): Country[] {
        return JSON.parse(json);
    }

    public static countryToJson(value: Country[]): string {
        return JSON.stringify(value);
    }
}
