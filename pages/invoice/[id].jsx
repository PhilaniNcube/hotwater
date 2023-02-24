const Invoice = ({invoice}) => {
  return <div>
            <div className="max-w-6xl mx-auto py-10">
              <h1 className="text-2xl font-bold text-slate-700">Payment Link: {invoice.first_name} {invoice.last_name}</h1>
              <p className="text-2xl font-bold text-slate-700">Reference: {invoice.reference}</p>
            </div>
         </div>;
};
export default Invoice;


export async function getServerSideProps(ctx) {
   const supabase = createServerSupabaseClient(ctx);

   const {
     data: { session },
   } = await supabase.auth.getSession();

       const { data: invoice, error } = await supabase
         .from("invoice")
         .select("*")
         .eq("id", ctx.params.id)
         .single();

       return {
         props: {
           invoice,
         },
       };
}
