import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import { useState } from "react";
import { type Votes, type VoteType } from "../../types/votes";

export default function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  const handleVote = (type: VoteType) => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  };

  const resetVotes = () => {
    setVotes(() => ({ good: 0, neutral: 0, bad: 0 }));
  };

  const canReset = votes.good > 0 || votes.neutral > 0 || votes.bad > 0;

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={canReset}
        />
      </div>
    </>
  );
}
