import { SeedPharsesList } from 'models/seed-phrase-list';

export interface ChipInputComponentProps {
  /**
   * list of seed phases
   */
  seedPhraseList: SeedPharsesList;

  /**
   * Label for the Input
   */
  label?: string;
}
