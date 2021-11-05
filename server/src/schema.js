const { gql } = require('apollo-server');

const typedefs = gql`
  type Query {
    userProfile(username: String!): User
    userPortfolioLink(username: String): Url
    userPhotos(username: String): [Photos]
    userLikedPhotos(username: String): [Photos]
    userCollections(username: String): [Collection]
    userStatistics(username: String): Statistics

    getAllPhotos(currentPage: String, limit: String, order: String): [Photos!]!
    getPhoto(id: ID!): Photos
    getRandomPhoto(
      photoCount: String
      query: String
      username: String
    ): [Photos!]!
    getPhotoStatistics(
      id: ID!
      resolution: String
      quantity: String
    ): Statistics
  }

  type User {
    id: ID
    updated_at: String
    username: String
    name: String
    first_name: String
    last_name: String
    instagram_username: String
    twitter_username: String
    portfolio_url: String
    bio: String
    location: String
    total_likes: Int
    total_photos: Int
    total_collections: Int
    followed_by_user: Boolean
    followers_count: Int
    following_count: Int
    downloads: Int
    social: Social
    profile_image: Image
    badge: Badge
    links: Links
  }

  type Photos {
    id: ID!
    created_at: String
    updated_at: String
    width: Int
    height: Int
    color: String
    blur_hash: String
    downloads: String # field available on getPhoto but not getAllPhotos
    likes: Int
    liked_by_user: Boolean
    public_domain: Boolean # field available on getPhoto but not getAllPhotos
    description: String
    exif: Exif # field available on getPhoto but not getAllPhotos
    location: PhotoLocation # field available on getPhoto but not getAllPhotos
    tags: [Tag] # field available on getPhoto but not getAllPhotos
    user: User
    current_user_collections: [currentUserCollections]
    urls: URLS
    links: Links
  }

  type Collection {
    id: ID!
    title: String
    description: String
    published_at: String
    last_collected_at: String
    updated_at: String
    total_photos: Int
    private: Boolean
    share_key: String
    cover_photo: Photos
    user: User
    links: Links
  }

  type Statistics {
    id: String # available on getPhotoStatistics
    username: String
    downloads: Stats
    views: Stats
    likes: Likes # available on getPhotoStatistics
  }

  type Url {
    url: String
  }

  type Social {
    instagram_username: String
    portfolio_url: String
    twitter_username: String
  }

  type Image {
    small: String
    medium: String
    large: String
  }

  type Badge {
    title: String
    primary: Boolean
    slug: String
    link: String
  }

  type Links {
    self: String
    html: String
    photos: String
    likes: String
    portfolio: String
  }

  type URLS {
    raw: String
    full: String
    regular: String
    small: String
    thumb: String
  }

  type currentUserCollections {
    id: ID!
    title: String
    published_at: String
    last_collected_at: String
    updated_at: String
    cover_photo: String
    user: String
  }

  type Stats {
    total: Int
    historical: Historical
  }

  type Historical {
    change: Int
    average: Int
    resolution: String
    quanitity: Int
    values: [Values]
  }

  type Values {
    date: String
    value: Int
  }

  type Exif {
    make: String
    model: String
    name: String
    exposure_time: String
    aperture: String
    focal_length: String
    iso: Int
  }

  type PhotoLocation {
    city: String
    country: String
    position: Position
  }

  type Tag {
    title: String
  }

  type Position {
    latitude: Float
    longitude: Float
  }

  type Likes {
    total: Int
    historical: Historical
  }
`;

module.exports = typedefs;
