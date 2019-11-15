// Fig. 28.22: ReservationService.cs
// Airline reservation WCF web service.
using System.Linq;

public class ReservationService : IReservationService
{
   // create ticketsDB object to access Tickets database
   private TicketsDataContext ticketsDB = new TicketsDataContext();

   // checks database to determine whether matching seat is available
   public bool Reserve( string seatType, string classType )
   {
      //  LINQ query to find seats matching the parameters
      var result =
         from seat in ticketsDB.Seats
         where ( seat.Taken == false ) && ( seat.Type == seatType ) &&
            ( seat.Class == classType )
         select seat;

      // get first available seat
      Seat firstAvailableSeat = result.FirstOrDefault();

      // if seat is available seats, mark it as taken
      if ( firstAvailableSeat != null )
      {
         firstAvailableSeat.Taken = true; // mark the seat as taken
         ticketsDB.SubmitChanges(); // update 
         return true; // seat was reserved
      } // end if

      return false; // no seat was reserved
   } // end method Reserve
} // end class ReservationService

/**************************************************************************
 * (C) Copyright 1992-2011 by Deitel & Associates, Inc. and               *
 * Pearson Education, Inc. All Rights Reserved.                           *
 *                                                                        *
 * DISCLAIMER: The authors and publisher of this book have used their     *
 * best efforts in preparing the book. These efforts include the          *
 * development, research, and testing of the theories and programs        *
 * to determine their effectiveness. The authors and publisher make       *
 * no warranty of any kind, expressed or implied, with regard to these    *
 * programs or to the documentation contained in these books. The authors *
 * and publisher shall not be liable in any event for incidental or       *
 * consequential damages in connection with, or arising out of, the       *
 * furnishing, performance, or use of these programs.                     *
 **************************************************************************/