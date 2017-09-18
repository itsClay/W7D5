class CreateDescriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :descriptions do |t|
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
