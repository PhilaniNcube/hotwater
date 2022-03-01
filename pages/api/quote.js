import { supabase } from '../../utils/supabase';

export default async function handler(req, res) {
  try {
    const { data, error } = await supabase.from('quotes').insert([
      {
        children: req.body.children,
        teenagers: req.body.teenagers,
        adults: req.body.adults,
        houseType: req.body.houseType,
        ownership: req.body.ownership,
        gasSupply: req.body.gasSupply,
        gasStove: req.body.gasStove,
        gasWaterHeating: req.body.gasWaterHeating,
        gasHeating: req.body.gasHeating,
        noGasUse: req.body.noGasUse,
        locateOutside: req.body.locateOutside,
        waterHeater: req.body.waterHeater,
        standardShower: req.body.standardShower,
        rainShower: req.body.rainShower,
        bathtub: req.body.bathtub,
        sink: req.body.sink,
        dishwasher: req.body.dishwasher,
        washingmachine: req.body.washingmachine,
        flowRate: req.body.flowRate,
        offGrid: req.body.offGrid,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        telephoneNumber: req.body.telephoneNumber,
        completeSolution: req.body.completeSolution,
        user_id: req.body.user_id,
      },
    ]);

    console.log(error);

    if (error) {
      res.status(400).json(error);
      return;
    }
    res.status(200).json({ data, error });
  } catch (error) {
    res.status(400).json('Error: could not save quote');
  }
}
