using GameAPI.App_Code;
using System.Data;
using System.Data.SqlClient;

namespace BECamLot.Controller
{
    public class DalGlobal
    {
        public async Task<List<ClReport>> getReport(string username)
        {
            try
            {
                List<ClReport> reportList = new List<ClReport>();
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
                        for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                        {
                            ClReport clReport = new ClReport();
                            clReport.CreatedBy = (string)ds.Tables[0].Rows[i]["CreatedBy"];
                            clReport.Mastername = (string)ds.Tables[0].Rows[i]["Mastername"];
                            clReport.BetAmount = (int)ds.Tables[0].Rows[i]["BetAmount"];
                            clReport.WinAmount = (int)ds.Tables[0].Rows[i]["WinAmount"];
                            clReport.Profit = (int)ds.Tables[0].Rows[i]["Profit"];
                            clReport.PP = (double)ds.Tables[0].Rows[i]["PP"];
                            clReport.SD = (double)ds.Tables[0].Rows[i]["SD"];
                            reportList.Add(clReport);
                        }


                        return reportList;

                    }
                }
            }
            catch (SqlException ex)
            {
                return null;
            }


        }

        public async Task<List<ClReport>> getReport2(string username)
        {
            try
            {
                List<ClReport> reportList = new List<ClReport>();
                DataSet ds = new DataSet();
                await using (SqlConnection connection = new SqlConnection(DalConnection.EDBConnectionString))
                {


                    using (SqlCommand command = new SqlCommand("SP_Report_SD2", connection))
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
                        for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                        {
                            ClReport clReport = new ClReport();
                            clReport.Mastername = (string)ds.Tables[0].Rows[i]["Mastername"];
                            clReport.BetAmount = (int)ds.Tables[0].Rows[i]["BetAmount"];
                            clReport.WinAmount = (int)ds.Tables[0].Rows[i]["WinAmount"];
                            clReport.Profit = (int)ds.Tables[0].Rows[i]["Profit"];
                            clReport.PP = (double)ds.Tables[0].Rows[i]["PP"];
                            clReport.SD = (double)ds.Tables[0].Rows[i]["SD"];
                            reportList.Add(clReport);
                        }


                        return reportList;

                    }
                }
            }
            catch (SqlException ex)
            {
                return null;
            }


        }
        public async Task<List<ClReport>> getReport3(string username)
        {
            try
            {
                List<ClReport> reportList = new List<ClReport>();
                DataSet ds = new DataSet();
                await using (SqlConnection connection = new SqlConnection(DalConnection.EDBConnectionString))
                {


                    using (SqlCommand command = new SqlCommand("SP_Report_SD3", connection))
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
                        for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                        {
                            ClReport clReport = new ClReport();
                            clReport.BetAmount = (int)ds.Tables[0].Rows[i]["BetAmount"];
                            clReport.WinAmount = (int)ds.Tables[0].Rows[i]["WinAmount"];
                            clReport.Profit = (int)ds.Tables[0].Rows[i]["Profit"];
                            clReport.PP = (double)ds.Tables[0].Rows[i]["PP"];
                            clReport.SD = (double)ds.Tables[0].Rows[i]["SD"];
                            reportList.Add(clReport);
                        }


                        return reportList;

                    }
                }
            }
            catch (SqlException ex)
            {
                return null;
            }


        }
        public async Task<List<ClGame>> getReport4(string username)
        {
            try
            {
                List<ClGame> reportList = new List<ClGame>();
                DataSet ds = new DataSet();
                await using (SqlConnection connection = new SqlConnection(DalConnection.EDBConnectionString))
                {


                    using (SqlCommand command = new SqlCommand("Sp_Report_LastGame", connection))
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
                        for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                        {
                            ClGame clGame = new ClGame();
                            clGame.ModA = (int)ds.Tables[0].Rows[i]["ModA"];
                            clGame.ModTotal = (int)ds.Tables[0].Rows[i]["ModTotal"];
                            clGame.GameID = (int)ds.Tables[0].Rows[i]["GameID"];
                            clGame.TimeSpent = (int)ds.Tables[0].Rows[i]["TimeSpent"];
                            clGame.TimeRemaining = (int)ds.Tables[0].Rows[i]["TimeRemaining"];
                            clGame.BettingEnd = (bool)ds.Tables[0].Rows[i]["BettingEnd"];
                            clGame.ResultReleased = (bool)ds.Tables[0].Rows[i]["ResultReleased"];
                            clGame.ModTotalAll = (int)ds.Tables[0].Rows[i]["ModTotalAll"];
                            reportList.Add(clGame);
                        }


                        return reportList;

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
