import Category from '../models/Category';
import Vehicle from '../models/Vehicle';
import ThumbImage from '../models/ThumbImage';

class CategoryController {
  async index(req, res) {
    const categories = await Category.findAll({
      order: ['id'],
      attributes: ['id', 'name', 'img', 'slug'],
    });

    return res.json(categories);
  }

  async detail(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findAll({
        where: { slug: id },
        order: ['id'],
        attributes: ['id', 'name', 'img', 'slug'],
        include: [
          {
            model: Vehicle,
            as: 'vehicles',
            attributes: [
              'id',
              'title',
              'value',
              'value_per',
              'short_description',
              'slug',
            ],
            include: [
              {
                model: ThumbImage,
                as: 'thumbimage',
                attributes: ['id', 'name', 'path', 'url'],
              },
            ],
          },
        ],
      });

      if (!category.length) {
        throw new Error('Categoria não encontrada.');
      }

      return res.json(category);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new CategoryController();
