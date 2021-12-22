class VaccineCard {

    //Properties
    private _fullyVaccined: boolean;
    private _secondVaccineDate: string; 

    public constructor VaccineCard(fullyVaccined: boolean , secondVaccineDate: string ){
        // TO DO: Change mechanism to get vaccine card information from e-devlet
        this._fullyVaccined = fullyVaccined;
        this._secondVaccineDate = secondVaccineDate;
    }

    public set fullyVaccined(fullyVaccined: boolean)
    {
        this._fullyVaccined = fullyVaccined;
    }
    public set secondVaccineDate(secondVaccineDate: string)
    {
        this._secondVaccineDate = secondVaccineDate;
    }

    public get fullyVaccined()
    {
        return this._fullyVaccined;
    }
    public get secondVaccineDate()
    {
        return this._secondVaccineDate;
    }
}