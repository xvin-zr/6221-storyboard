type Margin = {
    mt: number;
    mr: number;
    mb: number;
    ml: number;
};

type Dimension = {
    width: number;
    height: number;
} & Margin;

type CountryData = {
    country: string;
    iso_code: string;
    value: number;
};

type HierarchyData = {
    children: CountryData[];
};
