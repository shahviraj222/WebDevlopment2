import React from 'react';
function User() {
    return (<div>

        <table border='2' align="center">
            <tbody>
                <tr>

                    <th>No.</th>

                    <th>Period</th>

                    <th>Monday</th>

                    <th>Tuesday</th>

                    <th>Wednesday</th>

                    <th>Thursday</th>

                    <th>Friday</th>

                    <th>Saturday</th>

                </tr>


                <tr>

                    <td>1</td>

                    <td>7.00-8.00</td>

                    <td></td>

                    <td></td>

                    <td></td>

                    <td></td>
                    <td>MATHS</td>
                    <td>DAA</td>



                </tr>

                <tr>

                    <td>2</td>

                    <td>8.00-8.30</td>
                    <td></td>
                    <td></td>

                    <td></td>

                    <td></td>

                    <td rowspan="2">WP</td>

                    <td rowspan="2">CN</td>


                </tr>

                <tr>

                    <td>3</td>

                    <td>8.30-9.00</td>

                    <td></td>

                    <td></td>

                    <td></td>

                    <td rowspan="2">WP</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>9.00-9.30</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2" align="center">BREAK</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>9.30-10.30</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>DAA</td>
                    <td>DAA</td>
                    <td>FLAT</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>10.30-11.00</td>
                    <td colspan="4" align="center">BREAK</td>
                    <td rowspan='2'>CN</td>
                    <td></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>11.00-11.30</td>
                    <td rowspan='2'>WP</td>
                    <td rowspan='2'>MATHS</td>
                    <td rowspan='2'>UHV</td>
                    <td rowspan='2'>MATHS</td>
                    <td></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>11.30-12.00</td>
                    <td rowspan='2'>IPD</td>
                    <td></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>12.00-12.30</td>
                    <td rowspan='2'>CN</td>
                    <td rowspan='4'>DAA</td>
                    <td rowspan='2'>FLAT</td>
                    <td rowspan='4'>PY</td>
                    <td></td>
                </tr>

                <tr>

                    <td>10</td>

                    <td>12.30-1.00</td>

                    <td></td>

                    <td></td>




                </tr>

                <tr>

                    <td>11</td>

                    <td>1.00-1.30</td>

                    <td rowspan='2'>UHV</td>

                    <td rowspan='2'>UHV(T)</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>

                    <td>12</td>

                    <td>1.30-2.00</td>

                    <td></td>


                    <td></td>

                </tr>

                <tr>
                    <td>13</td>
                    <td>2.00-2.30</td>
                    <td colspan='6' align='center'>BREAK</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>2.30-3.00</td>
                    <td rowspan='4'>WP</td>
                    <td rowspan='2'>FLAT</td>
                    <td rowspan='4'>CN</td>
                    <td rowspan='2'>FLAT(T)</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>3.00-3.30</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>3.30-4.00</td>
                    <td rowspan="2">MATHS</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>4.00-4.30</td>
                    <td></td>
                    <td></td>
                    <td></td>

                </tr>


            </tbody>
        </table>
    </div>
    );
}

export default User;