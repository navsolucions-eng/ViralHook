import { TrendingUp } from 'lucide-react';
import ResultCard from './ResultCard';

interface ResultsSectionProps {
  readonly hooks: string[];
}

export default function ResultsSection({ hooks }: ResultsSectionProps) {
  if (hooks.length === 0) {
    return null;
  }

  