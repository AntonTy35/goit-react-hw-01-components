import {
  ProfileCard,
  Description,
  DescriptionImage,
  DescriptionName,
  DescriptionItem,
  StatsList,
  StatsItem,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <Description>
        <DescriptionImage src={avatar} alt={username} />
        <DescriptionName>{username}</DescriptionName>
        <DescriptionItem>@{tag}</DescriptionItem>
        <DescriptionItem>{location}</DescriptionItem>
      </Description>

      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <b>{followers}</b>
        </StatsItem>
        <StatsItem>
          Views
          <b>{views}</b>
        </StatsItem>
        <StatsItem>
          Likes
          <b>{likes}</b>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

/* <div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>; */