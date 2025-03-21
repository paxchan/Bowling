export type Bowler = {
  bowlerID: number;
  bowlerLastName: string;
  bowlerFirstName: string;
  bowlerMiddleInit?: string | null;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  teamID: number;
  team: {
    teamID: number;
    teamName: string;
    captainID: number;
  };
};
