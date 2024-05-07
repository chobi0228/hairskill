class User < ApplicationRecord
    has_many :active_relationships, class_name: "Relationship", foreign_key: "follower_id"
    has_many :passive_relationships, class_name: "Relationship", foreign_key: "follow_id"
    has_many :follows, through: :active_relationships, source: :follow
    has_many :followers, through: :passive_relationships, source: :follower
    has_many :posts, dependent: :destroy
    has_many :nices, dependent: :destroy
    has_many :contacts, dependent: :destroy
    attr_accessor :remember_token

    # ランダムな記憶トークンを返す
    # def self.new_token
    #     SecureRandom.urlsafe_base64
    # end

    # def self.digest(string)
    #     cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST : BCrypt::Engine.cost
    #     BCrypt::Password.create(string, cost: cost)
    # end

    # def remember
    #     self.remember_token = User.new_token
    #     update_attribute(:remember_digest, User.digest(remember_token))
    # end

end
