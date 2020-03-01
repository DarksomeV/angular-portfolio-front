export interface EducationItem {
  name: string;
  university: string;
  dates: {
    start: number;
    end: number;
  };
  description: string;
}
