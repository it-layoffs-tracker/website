type Year = {
  year: number;
  months: Month[];
};

type Month = {
  month: number;
  layoffs: LayoffInfo[];
};

type LayoffInfo = {
  day: number;
  laidOff: number;
  title: string;
  link: string;
};
