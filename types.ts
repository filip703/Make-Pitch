export interface SlideContextData {
  investorName: string;
  meetingPurpose: string;
  valuation: string;
  askAmount: string;
}

export interface SlideDefinition {
  id: string;
  title: string;
  component: React.FC<any>;
  defaultChecked: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  background: string;
  hcp: string;
}

export interface TimelineEvent {
  year: string;
  quarter?: string;
  title: string;
  desc: string;
  status: 'done' | 'current' | 'future';
}

export interface TechPartner {
  name: string;
  role: string;
  desc: string;
}