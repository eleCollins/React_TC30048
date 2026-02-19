import { useFetch } from "../useFetch";
import { useCounter } from "../useCounter";
import { TeamCard } from "./TeamCard";
import { Loading } from "./loading";

export const PremierLeagueTeams = () => {
    const { data, isLoading } = useFetch("https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=English%20Premier%20League");
    const { counter, increment, decrement } = useCounter(0);

    if (isLoading) return <Loading />;
    if (!data?.teams) return <p>No teams found</p>;

    const team = data.teams[counter];
    const maxTeams = data.teams.length - 1;

    return (
        <div>
            <h1>English Premier League Teams</h1>
            <TeamCard team={team} />
            <div>
                <button onClick={() => decrement()} disabled={counter === 0}>Previous</button>
                <span>{counter + 1} / {data.teams.length}</span>
                <button onClick={() => increment()} disabled={counter === maxTeams}>Next</button>
            </div>
        </div>
    );
};