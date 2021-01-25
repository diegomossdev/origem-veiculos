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
      order: [['updated_at', 'DESC']],
      attributes: [
        'brand',
        'description',
        'doors',
        'fuel',
        'id',
        'mileage',
        'model',
        'optionals',
        'short_description',
        'slug',
        'title',
        'transmission',
        'value',
        'value_per',
        'year_fab',
        'year_mod',
        'status',
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
          'status',
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

  async update(req, res) {
    try {
      const { id } = req.params;
      let vehicle = req.body;
      vehicle.category_id = vehicle.categoryId;

      if (!id) {
        throw new Error('Precisa ser enviado o id de um veículo.');
      }

      if (!vehicle.categoryId) {
        throw new Error('Precisa ser enviado o id de uma categoria.');
      }

      if (vehicle.name) {
        let itemsSlug = `${vehicle.brand.toLowerCase()} ${vehicle.model.toLowerCase()} ${vehicle.year_fab.toLowerCase()} ${vehicle.year_mod.toLowerCase()}`;
        let slugItem = slugify(itemsSlug, { lower: true });
        vehicle.slug = slugItem;
      }
      console.log(vehicle);

      const vehiclePut = await Vehicle.update(vehicle, {
        where: { id },
      });

      return res.json(vehiclePut);
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
