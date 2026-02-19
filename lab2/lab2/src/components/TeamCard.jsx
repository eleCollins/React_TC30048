export const TeamCard = ({ team }) => {
    if (!team) return null;

    return (
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
            <h2>{team.strTeam}</h2>
            {team.strBanner && (
                <img
                    src={team.strBanner}
                    alt={`${team.strTeam} banner`}
                    style={{ width: "100%", maxWidth: "700px", marginBottom: "16px" }}
                />
            )}

            <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "16px", flexWrap: "wrap" }}>
                <img src={team.strBadge} alt={`${team.strTeam} badge`} style={{ width: "200px" }} />
                {team.strEquipment && (
                    <img src={team.strEquipment} alt={`${team.strTeam} kit`} style={{ width: "200px" }} />
                )}
            </div>
            
            <p><strong>Country:</strong> {team.strCountry}</p>
            <p><strong>League:</strong> {team.strLeague}</p>
            <p><strong>Founded:</strong> {team.intFormedYear}</p>
            <p><strong>Stadium:</strong> {team.strStadium}</p>
            <p><strong>Description:</strong> {team.strDescriptionEN}</p>
        </div>
    );
};