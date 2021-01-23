import Vehicle from '../models/Vehicle';
import ThumbImage from '../models/ThumbImage';
import File from '../models/File';
import Category from '../models/Category';

class VehicleController {
  async store(req, res) {
    let vehicle = req.body;

    if (!vehicle.categoryId) {
      throw new Error('Veículo precisa ser vinculado a uma categoria.');
    }

    vehicle.user_id = req.userId;
    vehicle.category_id = req.categoryId;

    const {
      id,
      title,
      brand,
      model,
      year_fab,
      year_mod,
    } = await Vehicle.create(vehicle);

    return res.json({
      id,
      title,
      brand,
      model,
      year_fab,
      year_mod,
    });
  }

  async patch(req, res) {
    try {
      const vehicleId = req.params.vehicleId;

      const vehicleExists = await Vehicle.findByPk(vehicleId);

      if (!vehicleExists) {
        throw new Error('Veículo não encontrado.');
      }

      const { originalname: name, filename: path } = req.file;

      const thumbImage = await ThumbImage.create({
        name,
        path,
      });

      await Vehicle.update(
        { thumbimage_id: thumbImage.id },
        { where: { id: vehicleId } }
      );
      res.json({
        ok: true,
        message: 'Imagem de destaque atualizada com sucesso.',
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async index(req, res) {
    const vehicles = await Vehicle.findAll({
      order: ['id'],
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
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name', 'slug', 'img'],
        },
      ],
    });

    return res.json(vehicles);
  }

  async detail(req, res) {
    try {
      const id = req.params.vehicleId;
      const vehicle = await Vehicle.findAll({
        where: { id },
        order: ['id'],
        attributes: [
          'id',
          'title',
          'brand',
          'model',
          'year_fab',
          'year_mod',
          'doors',
          'transmission',
          'fuel',
          'mileage',
          'value',
          'value_per',
          'short_description',
          'slug',
          'description',
          'optionals',
        ],
        include: [
          {
            model: ThumbImage,
            as: 'thumbimage',
            attributes: ['id', 'name', 'path', 'url'],
          },
          {
            model: Category,
            as: 'category',
            attributes: ['id', 'name', 'slug', 'img'],
          },
        ],
      });

      if (!vehicle.length) {
        throw new Error('Veículo não encontrado.');
      }

      const images = await File.findAll({
        where: { vehicle_id: id },
        order: ['id'],
        attributes: ['id', 'url', 'path'],
      });

      return res.json({ vehicle, images });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async remove(req, res) {
    const { vehicleId } = req.params;

    try {
      await Vehicle.destroy({ where: { id: vehicleId } });

      return res.json({ ok: true, message: 'Veículo deletado!' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new VehicleController();
