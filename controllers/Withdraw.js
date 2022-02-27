const Withdraw = require("../models/Withdraw");

const AddWithdraw = async(req,res) => {
   const {Username,NetAmount} = req.body;
   const data = await Withdraw.create({
        Username: Username,
       NetAmount: NetAmount,
       Status:false
   })
   return res.send(data);
}

const GetWithdraw = async(req,res) => {

    const result = await Withdraw.find();
    return res.send(result)

}

const UpdateStatusWithdraw =async(req,res) => {
    const {id} = req.body;

    // const result = await Withdraw.updateOne({ name: 'T-90' }, function(err, res) {
    //     // Updated at most one doc, `res.modifiedCount` contains the number
    //     // of docs that MongoDB updated
    //   });;

      await Withdraw.findOneAndUpdate({_id:id}, {Status:true}, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send(doc);
  
    });
    // return res.send(result)

}

module.exports = {GetWithdraw,AddWithdraw,UpdateStatusWithdraw}




