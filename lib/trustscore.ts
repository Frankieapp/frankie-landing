// lib/trustScore.ts

export function calculateTrustScore(data: {
    income: number;
    rent: number;
    plaidConnected: boolean;
    verifiedID: boolean;
  }): number {
    let score = 0;
  
    if (data.income && data.rent) {
      const disposable = data.income - data.rent;
      if (disposable > 1500) score += 35;
      else if (disposable > 1000) score += 25;
      else if (disposable > 500) score += 15;
      else score += 5;
    }
  
    if (data.plaidConnected) score += 30;
    if (data.verifiedID) score += 35;
  
    return Math.min(score, 100);
  }
  