import {
  SectionStatistics,
  TitleStatistics,
  StatList,
  StatItem,
  LabelSpan,
  PercentageSpan,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      <TitleStatistics>{title}</TitleStatistics>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <LabelSpan>{label}</LabelSpan>
            <PercentageSpan>{percentage}%</PercentageSpan>
          </StatItem>
        ))}
      </StatList>
    </SectionStatistics>
  );
};
