class Post < ApplicationRecord
  validates :name, :description, presence: true, allow_blank: false

end
