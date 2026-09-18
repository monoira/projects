import { useTranslation } from "react-i18next";

export function useDayTranslation() {
  const { t } = useTranslation(["program"]);

  const dayMap: Record<string, string> = {
    monday: t("program:days.monday"),
    tuesday: t("program:days.tuesday"),
    wednesday: t("program:days.wednesday"),
    thursday: t("program:days.thursday"),
    friday: t("program:days.friday"),
    saturday: t("program:days.saturday"),
    sunday: t("program:days.sunday"),
    newDay: t("program:days.newDay"),
  };

  return (dayName: string) => {
    const lower = dayName.toLowerCase();
    return dayMap[lower] ?? dayName;
  };
}
