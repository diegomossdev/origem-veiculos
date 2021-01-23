import Sequelize, { Model } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        slug: Sequelize.STRING,
        img: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'categories',
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Vehicle, { as: 'vehicles' });
  }
}

export default Category;
