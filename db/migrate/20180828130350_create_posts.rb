class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :name, limit: 16, null: false
      t.text :description, limit: 256, null: false

      t.timestamps
    end
  end
end
