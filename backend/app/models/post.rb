class Post < ApplicationRecord
    belongs_to :user
    has_many :nices, dependent: :destroy
end
