class User < ApplicationRecord
    has_many :active_relationships, class_name: "Relationship", foreign_key: "follower_id"
    has_many :passive_relationships, class_name: "Relationship", foreign_key: "follow_id"
    has_many :follows, through: :active_relationships, source: :follow
    has_many :followers, through: :passive_relationships, source: :follower
    has_many :posts, dependent: :destroy
    has_many :nices, dependent: :destroy
    has_many :contacts, dependent: :destroy
    has_many :calendar, dependent: :destroy

end
