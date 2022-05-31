using GameAPI.App_Code;
using System.Data;
using System.Data.SqlClient;

namespace BECamLot.Controller
{
    public class DalGlobal
    {
        public async Task<ClReport> getReport(string username)
        {
            try
            {
                ClReport clReport = new ClReport();
                DataSet ds = new DataSet();
                await using (SqlConnection connection = new SqlConnection(DalConnection.EDBConnectionString))
                {


                    using (SqlCommand command = new SqlCommand("SP_Report_SD", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;

                        //SqlParameter sqlParameter1 = command.Parameters.Add("@Username", SqlDbType.VarChar);
                        //sqlParameter1.Value = Username;
                        connection.Open();
                        using (SqlDataAdapter da = new SqlDataAdapter(command))
                        {
                            da.Fill(ds);

                        }
                        connection.Close();
                        clReport.CreatedBy = (string)ds.Tables[0].Rows[0]["CreatedBy"];
                        clReport.Mastername = (string)ds.Tables[0].Rows[0]["Mastername"];
                        clReport.BetAmount = (int)ds.Tables[0].Rows[0]["BetAmount"];
                        clReport.WinAmount = (int)ds.Tables[0].Rows[0]["WinAmount"];
                        clReport.PP = (int)ds.Tables[0].Rows[0]["PP"];
                        clReport.SD = (int)ds.Tables[0].Rows[0]["SD"];


                        return clReport;

                    }
                }
            }
            catch (SqlException ex)
            {
                return null;
            }


        }


    }
}
