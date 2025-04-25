
const convertSuggestProfilesResponse = async (code, message, profiles) => {
  return {
    code,
    message,
    profiles: profiles.map(profile => ({
      id: profile._id.toString(),
      name: profile.name,
      age: profile.age,
      bio: profile.bio || '',
      photos: profile.photos || [],
      interests: profile.interests || [],
      gender: profile.gender
    }))
  };
};

const convertMatch = (match, currentUserId) => {
  // Get the other user's profile from the match
  const otherUser = match.users.find(user => 
    user._id.toString() !== currentUserId
  );

  return {
    match_id: match._id.toString(),
    profile: {
      id: otherUser._id.toString(),
      name: otherUser.name,
      photos: otherUser.photos || [],
      bio: otherUser.bio || ''
    },
    matched_at: match.matchedAt.toISOString(),
    last_message: match.lastMessage || '',
    last_message_time: match.lastMessageTime ? 
      match.lastMessageTime.toISOString() : ''
  };
};

const convertListMatchesResponse = async (code, message, matchData, userId) => {
  return {
    code,
    message,
    matches: matchData.matches.map(match => convertMatch(match, userId)),
    total: matchData.total,
    has_more: matchData.hasMore
  };
};

const convertUnmatchResponse = async (code, message) => {
  return {
    code,
    message
  };
};

module.exports = {
  convertSuggestProfilesResponse,
  convertListMatchesResponse,
  convertUnmatchResponse
};