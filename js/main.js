

let matchesId = document.getElementById("Matches-id");
let TablesId = document.getElementById("TablesId");
let PlayersTapId = document.getElementById("PlayersTapId");
let matches_content_id = document.getElementById("matches_content");
let tables_content = document.getElementById("tables_content");
let Tablesmtches = document.getElementById("Tablesmtches");
let box_players = document.getElementById("box_players");

matchesId.addEventListener("click", (eo) => {

    matches_content_id.innerHTML = myMatches;
    tables_content.style.visibility = "hidden"
    Tablesmtches.style.display = "none"
    box_players.style.display = "none"


})
TablesId.addEventListener("click", (eo) => {

    Tablesmtches.innerHTML = myTables;
    matches_content_id.style.display = "none"
    Tablesmtches.style.display = "none"
    box_players.style.display = "none"


})
PlayersTapId.addEventListener("click",(eo) => {

    box_players.innerHTML = myPlayes;
    tables_content.style.visibility = "hidden" 
    Tablesmtches.style.display = "none"
    matches_content_id.style.display = "none"


})

myMatches = `
<div class="content">
                <div class="mt-2 d-flex align-items-center rounded-2 bg-info">
                  <h2 class="m-auto text-start">
                    <span class="text-white"> Matches </span>
                  </h2>
                  <ul
                    class="d-flex m-2 justify-content-center align-items-center list-unstyled gap-1"
                    id="page_competition_1_block_competition_matches_summary_9_subnav"
                  >
                    <li class="">
                      <a
                        id="page_competition_1_block_competition_matches_summary_9_1_1"
                        class="btn btn-primary fw-bold"
                        >By game week</a
                      >
                    </li>
                    <li>
                      <a
                        id="page_competition_1_block_competition_matches_summary_9_1_2"
                        class="btn btn-primary fw-bold"
                        >By date</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="text-end bg-white" id="">
                  <div
                    id=""
                    class="mt-2 d-flex justify-content-around align-items-center"
                  >
                    <span class="mt-2">
                      <a
                        rel="previous"
                        class="btn btn-outline-info me-2"
                        id="page_competition_1_block_competition_matches_summary_9_previous"
                        >« Previous</a
                      >
                      <a
                        rel="next"
                        class="btn btn-outline-info"
                        id="page_competition_1_block_competition_matches_summary_9_next"
                        >Next »</a
                      >
                    </span>
                  </div>
                  <div
                    class="text-info fw-bold d-flex align-items-center justify-content-start ms-2"
                  >
                    <label
                      for="page_competition_1_block_competition_matches_summary_9_page_dropdown"
                      >Game week:</label
                    >
                    &nbsp;
                    <select
                      name="page"
                      id=""
                      size="1"
                      class="form-select-sm text-info fw-bold border-info rounded-2"
                      aria-label=".form-select-lg example"
                    >
                      <option value="0">1</option>
                      <option value="1">2</option>
                      <option value="2">3</option>
                      <option value="3">4</option>
                      <option value="4">5</option>
                      <option value="5">6</option>
                      <option value="6">7</option>
                      <option value="7">8</option>
                      <option value="8">9</option>
                      <option value="9">10</option>
                      <option value="10">11</option>
                      <option value="11">12</option>
                      <option value="12">13</option>
                      <option value="13">14</option>
                      <option value="14">15</option>
                      <option value="15">16</option>
                      <option value="16">17</option>
                      <option value="17">18</option>
                      <option value="18">19</option>
                      <option value="19">20</option>
                      <option value="20">21</option>
                      <option value="21">22</option>
                      <option value="22">23</option>
                      <option value="23">24</option>
                      <option value="24">25</option>
                      <option value="25">26</option>
                      <option value="26">27</option>
                      <option value="27">28</option>
                      <option value="28">29</option>
                      <option value="29">30</option>
                      <option value="30">31</option>
                      <option value="31">32</option>
                      <option value="32">33</option>
                      <option value="33" selected="selected">34</option>
                    </select>
                  </div>

                  <div class="table-container mt-2">
                    <table
                      class="table table-hover table-bordered table-secondary text-white"
                    >
                      <thead>
                        <tr class="sub-head">
                          <th class="day">Day</th>

                          <th class="team team-a">Home team</th>

                          <th class="score-time">Score/Time</th>
                          <th class="team team-b">Away team</th>

                          <th class="events-button button">&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody
                        class="table-bordered text-info fw-bold table-info table-hover bg-white text-center"
                      >
                        <tr
                          class="no-date-repetition-new"
                          data-timestamp="1716039000"
                        >
                          <td class="date" colspan="5">Saturday 18/05/2024</td>
                        </tr>
                        <tr>
                          <td class="day">
                            <div class="bg-white">FT</div>
                          </td>

                          <td class="team team-a strong">
                            <a
                              href="/teams/germany/bv-borussia-09-dortmund/964/"
                              title="Borussia Dortmund"
                              class="text-decoration-none text-nowrap"
                            >
                              Borussia Dortmund
                            </a>
                          </td>

                          <td class="score-time">
                            <a
                              class="text-decoration-none"
                              href="/matches/2024/05/18/germany/bundesliga/bv-borussia-09-dortmund/sv-darmstadt-1898-ev/4105515/"
                            >
                              <span class="extra_time_score">4 - 0</span>
                            </a>
                          </td>
                          <td class="team team-b">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/teams/germany/sv-darmstadt-1898-ev/2549/"
                              title="Darmstadt"
                            >
                              Darmstadt
                            </a>
                          </td>
                          <td class="events-button button first-occur">
                            <!-- zeyad -->
                            <a
                              href="/matches/2024/05/18/germany/bundesliga/bv-borussia-09-dortmund/sv-darmstadt-1898-ev/4105515/#events"
                              title="View events"
                              class="events-button-button"
                              >View events</a
                            >
                          </td>
                        </tr>

                        <tr
                          class="odd expanded match border no-date-repetition"
                          data-timestamp="1716039000"
                          id="page_competition_1_block_competition_matches_summary_9_match-4105516"
                          data-competition="9"
                          data-event-id="7fopb0ruqu23m2tseb7r66cd0"
                          data-competition-uuid="6by3h89i2eykc341oz7lv1ddd"
                          data-status="Played"
                          data-expand="4105516"
                        >
                          <td class="day">
                            <div class="bg-white">FT</div>
                          </td>

                          <td class="team team-a strong">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/teams/germany/1-fc-union-berlin/1026/"
                              title="Union Berlin"
                            >
                              Union Berlin
                            </a>
                          </td>

                          <td class="score-time">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/matches/2024/05/18/germany/bundesliga/1-fc-union-berlin/sc-freiburg/4105516/"
                            >
                              <span class="extra_time_score">2 - 1</span>
                            </a>
                          </td>
                          <td class="team team-b">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/teams/germany/sc-freiburg/970/"
                              title="Freiburg"
                            >
                              Freiburg
                            </a>
                          </td>
                          <td class="events-button button first-occur">
                            <a
                              href="/matches/2024/05/18/germany/bundesliga/1-fc-union-berlin/sc-freiburg/4105516/#events"
                              title="View events"
                              class="events-button-button"
                              >View events</a
                            >
                          </td>
                        </tr>

                        <tr
                          class="even expanded match border no-date-repetition"
                          data-timestamp="1716039000"
                          id="page_competition_1_block_competition_matches_summary_9_match-4105517"
                          data-competition="9"
                          data-event-id="7fz0hbaiqwb1cwd6zugjyypzo"
                          data-competition-uuid="6by3h89i2eykc341oz7lv1ddd"
                          data-status="Played"
                          data-expand="4105517"
                        >
                          <td class="day">
                            <div class="bg-white">FT</div>
                          </td>

                          <td class="team team-a strong">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/teams/germany/bayer-04-leverkusen/963/"
                              title="Bayer Leverkusen"
                            >
                              Bayer Leverkusen
                            </a>
                          </td>

                          <td class="score-time">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/matches/2024/05/18/germany/bundesliga/bayer-04-leverkusen/fc-augsburg/4105517/"
                            >
                              <span class="extra_time_score">2 - 1</span>
                            </a>
                          </td>
                          <td class="team team-b">
                            <a
                              class="text-decoration-none text-nowrap"
                              title="Augsburg"
                            >
                              Augsburg
                            </a>
                          </td>
                          <td class="events-button button first-occur">
                            <a
                              href="/matches/2024/05/18/germany/bundesliga/bayer-04-leverkusen/fc-augsburg/4105517/#events"
                              title="View events"
                              class="events-button-button"
                              >View events</a
                            >
                          </td>
                        </tr>

                        <tr>
                          <td class="day">
                            <div class="bg-white">FT</div>
                          </td>

                          <td class="team team-a">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/teams/germany/eintracht-frankfurt/979/"
                              title="Eintracht Frankfurt"
                            >
                              Eintracht Frankfurt
                            </a>
                          </td>

                          <td class="score-time">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/matches/2024/05/18/germany/bundesliga/eintracht-frankfurt/rb-leipzig/4105518/"
                            >
                              <span class="extra_time_score">2 - 2</span>
                            </a>
                          </td>
                          <td class="team team-b">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/teams/germany/rb-leipzig/13410/"
                              title="RB Leipzig"
                            >
                              RB Leipzig
                            </a>
                          </td>
                          <td class="events-button button first-occur">
                            <a
                              href="/matches/2024/05/18/germany/bundesliga/eintracht-frankfurt/rb-leipzig/4105518/#events"
                              title="View events"
                              class="events-button-button"
                              >View events</a
                            >
                          </td>
                        </tr>

                        <tr>
                          <td class="day">
                            <div class="bg-white">FT</div>
                          </td>

                          <td class="team team-a">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/teams/germany/vfl-wolfsburg/968/"
                              title="Wolfsburg"
                            >
                              Wolfsburg
                            </a>
                          </td>

                          <td class="score-time">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/matches/2024/05/18/germany/bundesliga/vfl-wolfsburg/1-fsv-mainz-05/4105519/"
                            >
                              <span class="extra_time_score">1 - 3</span>
                            </a>
                          </td>
                          <td class="team team-b strong">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/teams/germany/1-fsv-mainz-05/977/"
                              title="Mainz"
                            >
                              Mainz
                            </a>
                          </td>
                          <td class="events-button button first-occur">
                            <a
                              href="/matches/2024/05/18/germany/bundesliga/vfl-wolfsburg/1-fsv-mainz-05/4105519/#events"
                              title="View events"
                              class="events-button-button"
                              >View events</a
                            >
                          </td>
                        </tr>

                        <tr
                          class="odd expanded match border no-date-repetition"
                          data-timestamp="1716039000"
                          id="page_competition_1_block_competition_matches_summary_9_match-4105520"
                          data-competition="9"
                          data-event-id="7gsto05hdvg6r1zozosfa4e1g"
                          data-competition-uuid="6by3h89i2eykc341oz7lv1ddd"
                          data-status="Played"
                          data-expand="4105520"
                        >
                          <td class="day">
                            <div class="bg-white">FT</div>
                          </td>

                          <td class="team team-a strong">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/teams/germany/tsg-1899-hoffenheim-ev/1001/"
                              title="Hoffenheim"
                            >
                              Hoffenheim
                            </a>
                          </td>

                          <td class="score-time">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/matches/2024/05/18/germany/bundesliga/tsg-1899-hoffenheim-ev/fc-bayern-munchen/4105520/"
                            >
                              <span class="extra_time_score">4 - 2</span>
                            </a>
                          </td>
                          <td class="team team-b">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/teams/germany/fc-bayern-munchen/961/"
                              title="Bayern Munich"
                            >
                              Bayern Munich
                            </a>
                          </td>
                          <td class="events-button button first-occur">
                            <a
                              href="/matches/2024/05/18/germany/bundesliga/tsg-1899-hoffenheim-ev/fc-bayern-munchen/4105520/#events"
                              title="View events"
                              class="events-button-button"
                              >View events</a
                            >
                          </td>
                        </tr>

                        <tr
                          class="even expanded match border no-date-repetition"
                          data-timestamp="1716039000"
                          id="page_competition_1_block_competition_matches_summary_9_match-4105521"
                          data-competition="9"
                          data-event-id="7h4k6zzni24be3ot6o146k6xg"
                          data-competition-uuid="6by3h89i2eykc341oz7lv1ddd"
                          data-status="Played"
                          data-expand="4105521"
                        >
                          <td class="day">
                            <div class="bg-white">FT</div>
                          </td>

                          <td class="team team-a strong">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/teams/germany/sv-werder-bremen/960/"
                              title="Werder Bremen"
                            >
                              Werder Bremen
                            </a>
                          </td>

                          <td class="score-time">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/matches/2024/05/18/germany/bundesliga/sv-werder-bremen/vfl-bochum-1848-fussballgemeinschaft-ev/4105521/"
                            >
                              <span class="extra_time_score">4 - 1</span>
                            </a>
                          </td>
                          <td class="team team-b">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/teams/germany/vfl-bochum-1848-fussballgemeinschaft-ev/965/"
                              title="Bochum"
                            >
                              Bochum
                            </a>
                          </td>
                          <td class="events-button button first-occur">
                            <a
                              href="/matches/2024/05/18/germany/bundesliga/sv-werder-bremen/vfl-bochum-1848-fussballgemeinschaft-ev/4105521/#events"
                              title="View events"
                              class="events-button-button"
                              >View events</a
                            >
                          </td>
                        </tr>

                        <tr>
                          <td class="day">
                            <div class="bg-white">FT</div>
                          </td>

                          <td class="team team-a strong">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/teams/germany/vfb-stuttgart-1893-ev/962/"
                              title="Stuttgart"
                            >
                              Stuttgart
                            </a>
                          </td>

                          <td class="score-time">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/matches/2024/05/18/germany/bundesliga/vfb-stuttgart-1893-ev/borussia-monchengladbach/4105522/"
                            >
                              <span class="extra_time_score">4 - 0</span>
                            </a>
                          </td>
                          <td class="team team-b">
                            <a
                              href="/teams/germany/borussia-monchengladbach/971/"
                              title="Borussia M'gladbach"
                              class="text-decoration-none text-nowrap"
                            >
                              Borussia M'gladbach
                            </a>
                          </td>
                          <td class="events-button button first-occur">
                            <a
                              href="/matches/2024/05/18/germany/bundesliga/vfb-stuttgart-1893-ev/borussia-monchengladbach/4105522/#events"
                              title="View events"
                              class="events-button-button"
                              >View events</a
                            >
                          </td>
                        </tr>

                        <tr>
                          <td class="day">
                            <div class="bg-white">FT</div>
                          </td>

                          <td class="team team-a strong">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/teams/germany/1-fc-heidenheim-1846/5862/"
                              title="Heidenheim"
                            >
                              Heidenheim
                            </a>
                          </td>

                          <td class="score-time">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/matches/2024/05/18/germany/bundesliga/1-fc-heidenheim-1846/1-fc-koln/4105523/"
                            >
                              <span class="extra_time_score">4 - 1</span>
                            </a>
                          </td>
                          <td class="team team-b">
                            <a
                              class="text-decoration-none text-nowrap"
                              href="/teams/germany/1-fc-koln/980/"
                              title="FC Cologne"
                            >
                              FC Cologne
                            </a>
                          </td>
                          <td class="events-button button first-occur">
                            <a
                              href="/matches/2024/05/18/germany/bundesliga/1-fc-heidenheim-1846/1-fc-koln/4105523/#events"
                              title="View events"
                              class="events-button-button"
                              >View events</a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
`
myTables = `<div id="tables_content" class="d-flex">
              <div class=" clearfix block_competition_tables-wrapper body-table header-wrapper" id="page_competition_1_block_competition_tables_11-wrapper">
                <!-- zeyad abdoh -->

                <div class="d-flex rounded-2 bg-info">
                        <h2 class="me-auto ps-2">
                          <span class="text-start"></span>
                          Tables
                        </h2>
                        <div class="d-flex pe-2 justify-content-center align-items-center" data-searchable="1">
                          <select id="page_competition_1_block_competition_tables_11-select-league" data-plugin="" autocomplete="off" class="form-select-sm text-info fw-bold border-info rounded-2">
                            <option id="page_competition_1_block_competition_tables_11_1_1" value="page_competition_1_block_competition_tables_11_1_1" selected="selected">
                              League table
                            </option>
                            <option id="page_competition_1_block_competition_tables_11_1_2" value="page_competition_1_block_competition_tables_11_1_2">
                              Half-time
                            </option>
                            <option id="page_competition_1_block_competition_tables_11_1_3" value="page_competition_1_block_competition_tables_11_1_3">
                              Wide
                            </option>
                            <option id="page_competition_1_block_competition_tables_11_1_4" value="page_competition_1_block_competition_tables_11_1_4">
                              Form
                            </option>
                            <option id="page_competition_1_block_competition_tables_11_1_5" value="page_competition_1_block_competition_tables_11_1_5">
                              Over/under
                            </option>
                            <option id="page_competition_1_block_competition_tables_11_1_6" value="page_competition_1_block_competition_tables_11_1_6">
                              Attendance
                            </option>
                          </select>
                        </div>
                      </div><table class="table table-hover">
                  <thead class="table-bordered text-info table-info table-hover bg-white text-center">
                    <tr>
                      
                    </tr>
                    <tr class="  ">
                      <th title="Rank" class="sortasc sortdefaultasc sortcol">
                        #
                      </th>
                      <th class="">&nbsp;</th>
                      <th class="text team sortdefaultasc sortcol">Team</th>
                      <th class="number total mp sortcol">
                        <acronym title="Matches played">MP</acronym>
                      </th>
                      <th class="number total won total_won sortcol">
                        <acronym title="Wins">W</acronym>
                      </th>
                      <th class="number total drawn total_drawn sortcol">
                        <acronym title="Draws">D</acronym>
                      </th>
                      <th class="number total lost total_lost sortcol">
                        <acronym title="Losses">L</acronym>
                      </th>
                      <th class="number total gf total_gf sortcol">
                        <acronym title="Goals for">F</acronym>
                      </th>
                      <th class="number total ga total_ga sortcol">
                        <acronym title="Goals against">A</acronym>
                      </th>
                      <th class="number gd sortcol">
                        <acronym title="Goal difference">D</acronym>
                      </th>
                      <th class="number points sortcol">
                        <acronym title="Points">P</acronym>
                      </th>
                      <th class="text-nowrap">Last 5 matches</th>
                      <th class="compare sortcol">
                        <acronym title="Head 2 Head">H2H</acronym>
                      </th>
                    </tr>
                  </thead>

                  <tbody class="bg-white table-bordered">
                    <tr class="" id="team_rank_row_963" data-team_id="963">
                      <td class="rank rank-dark-green">1</td>
                      <td class="direction"></td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/bayer-04-leverkusen/963/" title="Bayer Leverkusen">Bayer Leverkusen</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        28
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        6
                      </td>
                      <td class="number total lost total_lost">0</td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        89
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        24
                      </td>
                      <td class="number gd">+65</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        90
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/bayer-04-leverkusen/fc-augsburg/4105517/" class="text-decoration-none bg-success text-white text-nowrap" title="Bayer Leverkusen - Augsburg 2 - 1">W</a><a href="/matches/2024/05/12/germany/bundesliga/vfl-bochum-1848-fussballgemeinschaft-ev/bayer-04-leverkusen/4105512/" class="text-decoration-none bg-success text-white text-nowrap" title="Bochum - Bayer Leverkusen 0 - 5">W</a><a href="/matches/2024/05/05/germany/bundesliga/eintracht-frankfurt/bayer-04-leverkusen/4105499/" class="text-decoration-none bg-success text-white text-nowrap" title="Eintracht Frankfurt - Bayer Leverkusen 1 - 5">W</a><a href="/matches/2024/04/27/germany/bundesliga/bayer-04-leverkusen/vfb-stuttgart-1893-ev/4105491/" class="text-decoration-none bg-success text-white text-nowrap" title="Bayer Leverkusen - Stuttgart 2 - 2">D</a><a href="/matches/2024/04/21/germany/bundesliga/bv-borussia-09-dortmund/bayer-04-leverkusen/4105479/" class="text-decoration-none bg-warning text-white text-nowrap" title="Borussia Dortmund - Bayer Leverkusen 1 - 1">D</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="963">
                      </td>
                    </tr>
                    <tr class="team_rank even" id="team_rank_row_962" data-team_id="962">
                      <td class="rank rank-dark-green">2</td>
                      <td class="direction">
                        <img src="imges/delta_plus.gif" width="7" height="4" title="Previous rank: 3" alt="Previous rank: 3">
                      </td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/vfb-stuttgart-1893-ev/962/" title="Stuttgart">Stuttgart</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        23
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        4
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        7
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        78
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        39
                      </td>
                      <td class="number gd">+39</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        73
                      </td>
                      <td class="form text-white">
                        <a href="/matches/2024/05/18/germany/bundesliga/vfb-stuttgart-1893-ev/borussia-monchengladbach/4105522/" class="text-decoration-none bg-success text-white text-nowrap" title="Stuttgart - Borussia M'gladbach 4 - 0">W</a><a href="/matches/2024/05/10/germany/bundesliga/fc-augsburg/vfb-stuttgart-1893-ev/4105513/" class="text-decoration-none bg-success text-white text-nowrap" title="Augsburg - Stuttgart 0 - 1">W</a><a href="/matches/2024/05/04/germany/bundesliga/vfb-stuttgart-1893-ev/fc-bayern-munchen/4105504/" class="text-decoration-none bg-success text-white text-nowrap" title="Stuttgart - Bayern Munich 3 - 1">W</a><a href="/matches/2024/04/27/germany/bundesliga/bayer-04-leverkusen/vfb-stuttgart-1893-ev/4105491/" class="text-decoration-none bg-warning text-white text-nowrap" title="Bayer Leverkusen - Stuttgart 2 - 2">D</a><a href="/matches/2024/04/21/germany/bundesliga/sv-werder-bremen/vfb-stuttgart-1893-ev/4105486/" class="text-decoration-none bg-danger text-white text-nowrap" title="Werder Bremen - Stuttgart 2 - 1">L</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="962">
                      </td>
                    </tr>
                    <tr class="team_rank odd" id="team_rank_row_961" data-team_id="961">
                      <td class="rank rank-dark-green">3</td>
                      <td class="direction">
                        <img src="/imges/delta_min.gif" width="7" height="4" title="Previous rank: 2" alt="Previous rank: 2">
                      </td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/fc-bayern-munchen/961/" title="Bayern Munich">Bayern Munich</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        23
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        3
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        8
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        94
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        45
                      </td>
                      <td class="number gd">+49</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        72
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/tsg-1899-hoffenheim-ev/fc-bayern-munchen/4105520/" class="text-decoration-none bg-danger text-white text-nowrap" title="Hoffenheim - Bayern Munich 4 - 2">L</a><a href="/matches/2024/05/12/germany/bundesliga/fc-bayern-munchen/vfl-wolfsburg/4105506/" class="text-decoration-none bg-success text-white text-nowrap" title="Bayern Munich - Wolfsburg 2 - 0">W</a><a href="/matches/2024/05/04/germany/bundesliga/vfb-stuttgart-1893-ev/fc-bayern-munchen/4105504/" class="text-decoration-none bg-danger text-white text-nowrap" title="Stuttgart - Bayern Munich 3 - 1">L</a><a href="/matches/2024/04/27/germany/bundesliga/fc-bayern-munchen/eintracht-frankfurt/4105488/" class="text-decoration-none bg-success text-white text-nowrap" title="Bayern Munich - Eintracht Frankfurt 2 - 1">W</a><a href="/matches/2024/04/20/germany/bundesliga/1-fc-union-berlin/fc-bayern-munchen/4105480/" class="text-decoration-none bg-success text-white text-nowrap" title="Union Berlin - Bayern Munich 1 - 5">W</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="961">
                      </td>
                    </tr>
                    <tr class="team_rank even" id="team_rank_row_13410" data-team_id="13410">
                      <td class="rank rank-dark-green">4</td>
                      <td class="direction"></td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/rb-leipzig/13410/" title="RB Leipzig">RB Leipzig</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        19
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        8
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        7
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        77
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        39
                      </td>
                      <td class="number gd">+38</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        65
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/eintracht-frankfurt/rb-leipzig/4105518/" class="text-decoration-none bg-success text-white text-nowrap" title="Eintracht Frankfurt - RB Leipzig 2 - 2">D</a><a href="/matches/2024/05/11/germany/bundesliga/rb-leipzig/sv-werder-bremen/4105507/" class="text-decoration-none bg-success text-white text-nowrap" title="RB Leipzig - Werder Bremen 1 - 1">D</a><a href="/matches/2024/05/03/germany/bundesliga/tsg-1899-hoffenheim-ev/rb-leipzig/4105502/" class="text-decoration-none bg-success text-white text-nowrap" title="Hoffenheim - RB Leipzig 1 - 1">D</a><a href="/matches/2024/04/27/germany/bundesliga/rb-leipzig/bv-borussia-09-dortmund/4105489/" class="text-decoration-none bg-success text-white text-nowrap" title="RB Leipzig - Borussia Dortmund 4 - 1">W</a><a href="/matches/2024/04/20/germany/bundesliga/1-fc-heidenheim-1846/rb-leipzig/4105487/" class="text-decoration-none bg-success text-white text-nowrap" title="Heidenheim - RB Leipzig 1 - 2">W</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="13410">
                      </td>
                    </tr>
                    <tr class="team_rank odd" id="team_rank_row_964" data-team_id="964">
                      <td class="rank rank-dark-green">5</td>
                      <td class="direction"></td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/bv-borussia-09-dortmund/964/" title="Borussia Dortmund">Borussia Dortmund</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        18
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        9
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        7
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        68
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        43
                      </td>
                      <td class="number gd">+25</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        63
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/bv-borussia-09-dortmund/sv-darmstadt-1898-ev/4105515/" class="text-decoration-none bg-success text-white text-nowrap" title="Borussia Dortmund - Darmstadt 4 - 0">W</a><a href="/matches/2024/05/11/germany/bundesliga/1-fsv-mainz-05/bv-borussia-09-dortmund/4105509/" class="text-decoration-none bg-danger text-white text-nowrap" title="Mainz - Borussia Dortmund 3 - 0">L</a><a href="/matches/2024/05/04/germany/bundesliga/bv-borussia-09-dortmund/fc-augsburg/4105497/" class="text-decoration-none bg-success text-white text-nowrap" title="Borussia Dortmund - Augsburg 5 - 1">W</a><a href="/matches/2024/04/27/germany/bundesliga/rb-leipzig/bv-borussia-09-dortmund/4105489/" class="text-decoration-none bg-danger text-white text-nowrap" title="RB Leipzig - Borussia Dortmund 4 - 1">L</a><a href="/matches/2024/04/21/germany/bundesliga/bv-borussia-09-dortmund/bayer-04-leverkusen/4105479/" class="text-decoration-none bg-warning text-white text-nowrap" title="Borussia Dortmund - Bayer Leverkusen 1 - 1">D</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="964">
                      </td>
                    </tr>
                    <tr class="team_rank even" id="team_rank_row_979" data-team_id="979">
                      <td class="rank rank-dark-blue">6</td>
                      <td class="direction"></td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/eintracht-frankfurt/979/" title="Eintracht Frankfurt">Eintracht Fran…</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        11
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        14
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        9
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        51
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        50
                      </td>
                      <td class="number gd">+1</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        47
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/eintracht-frankfurt/rb-leipzig/4105518/" class="text-decoration-none bg-success text-white text-nowrap" title="Eintracht Frankfurt - RB Leipzig 2 - 2">D</a><a href="/matches/2024/05/11/germany/bundesliga/borussia-monchengladbach/eintracht-frankfurt/4105510/" class="text-decoration-none bg-success text-white text-nowrap" title="Borussia M'gladbach - Eintracht Frankfurt 1 - 1">D</a><a href="/matches/2024/05/05/germany/bundesliga/eintracht-frankfurt/bayer-04-leverkusen/4105499/" class="text-decoration-none bg-danger text-white text-nowrap" title="Eintracht Frankfurt - Bayer Leverkusen 1 - 5">L</a><a href="/matches/2024/04/27/germany/bundesliga/fc-bayern-munchen/eintracht-frankfurt/4105488/" class="text-decoration-none bg-danger text-white text-nowrap" title="Bayern Munich - Eintracht Frankfurt 2 - 1">L</a><a href="/matches/2024/04/19/germany/bundesliga/eintracht-frankfurt/fc-augsburg/4105482/" class="text-decoration-none bg-success text-white text-nowrap" title="Eintracht Frankfurt - Augsburg 3 - 1">W</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="979">
                      </td>
                    </tr>
                    <tr class="team_rank odd" id="team_rank_row_1001" data-team_id="1001">
                      <td class="rank rank-dark-blue">7</td>
                      <td class="direction">
                        <img src="imges/delta_plus.gif" width="7" height="4" title="Previous rank: 8" alt="Previous rank: 8">
                      </td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/tsg-1899-hoffenheim-ev/1001/" title="Hoffenheim">Hoffenheim</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        13
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        7
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        14
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        66
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        66
                      </td>
                      <td class="number gd">+0</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        46
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/tsg-1899-hoffenheim-ev/fc-bayern-munchen/4105520/" class="text-decoration-none bg-success text-white text-nowrap" title="Hoffenheim - Bayern Munich 4 - 2">W</a><a href="/matches/2024/05/12/germany/bundesliga/sv-darmstadt-1898-ev/tsg-1899-hoffenheim-ev/4105514/" class="text-decoration-none bg-success text-white text-nowrap" title="Darmstadt - Hoffenheim 0 - 6">W</a><a href="/matches/2024/05/03/germany/bundesliga/tsg-1899-hoffenheim-ev/rb-leipzig/4105502/" class="text-decoration-none bg-success text-white text-nowrap" title="Hoffenheim - RB Leipzig 1 - 1">D</a><a href="/matches/2024/04/26/germany/bundesliga/vfl-bochum-1848-fussballgemeinschaft-ev/tsg-1899-hoffenheim-ev/4105494/" class="text-decoration-none bg-danger text-white text-nowrap" title="Bochum - Hoffenheim 3 - 2">L</a><a href="/matches/2024/04/20/germany/bundesliga/tsg-1899-hoffenheim-ev/borussia-monchengladbach/4105485/" class="text-decoration-none bg-success text-white text-nowrap" title="Hoffenheim - Borussia M'gladbach 4 - 3">W</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="1001">
                      </td>
                    </tr>
                    <tr class="team_rank even" id="team_rank_row_5862" data-team_id="5862">
                      <td class="rank rank-dark-blue">8</td>
                      <td class="direction">
                        <img src="imges/delta_min.gif" width="7" height="4" title="Previous rank: 10" alt="Previous rank: 10">
                      </td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/1-fc-heidenheim-1846/5862/" title="Heidenheim">Heidenheim</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        10
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        12
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        12
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        50
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        55
                      </td>
                      <td class="number gd">-5</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        42
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/1-fc-heidenheim-1846/1-fc-koln/4105523/" class="text-decoration-none bg-success text-white text-nowrap" title="Heidenheim - FC Cologne 4 - 1">W</a><a href="/matches/2024/05/11/germany/bundesliga/sc-freiburg/1-fc-heidenheim-1846/4105508/" class="text-decoration-none bg-success text-white text-nowrap" title="Freiburg - Heidenheim 1 - 1">D</a><a href="/matches/2024/05/05/germany/bundesliga/1-fc-heidenheim-1846/1-fsv-mainz-05/4105505/" class="text-decoration-none bg-success text-white text-nowrap" title="Heidenheim - Mainz 1 - 1">D</a><a href="/matches/2024/04/28/germany/bundesliga/sv-darmstadt-1898-ev/1-fc-heidenheim-1846/4105496/" class="text-decoration-none bg-success text-white text-nowrap" title="Darmstadt - Heidenheim 0 - 1">W</a><a href="/matches/2024/04/20/germany/bundesliga/1-fc-heidenheim-1846/rb-leipzig/4105487/" class="text-decoration-none bg-danger text-white text-nowrap" title="Heidenheim - RB Leipzig 1 - 2">L</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="5862">
                      </td>
                    </tr>
                    <tr class="team_rank odd" id="team_rank_row_960" data-team_id="960">
                      <td class="rank">9</td>
                      <td class="direction">
                        <img src="imges/delta_plus.gif" width="7" height="4" title="Previous rank: 11" alt="Previous rank: 11">
                      </td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/sv-werder-bremen/960/" title="Werder Bremen">Werder Bremen</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        11
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        9
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        14
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        48
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        54
                      </td>
                      <td class="number gd">-6</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        42
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/sv-werder-bremen/vfl-bochum-1848-fussballgemeinschaft-ev/4105521/" class="text-decoration-none bg-success text-white text-nowrap" title="Werder Bremen - Bochum 4 - 1">W</a>
                        <a href="/matches/2024/05/11/germany/bundesliga/rb-leipzig/sv-werder-bremen/4105507/" class="text-decoration-none bg-success text-white text-nowrap" title="RB Leipzig - Werder Bremen 1 - 1">D</a>
                        <a href="/matches/2024/05/04/germany/bundesliga/sv-werder-bremen/borussia-monchengladbach/4105503/" class="text-decoration-none bg-success text-white text-nowrap" title="Werder Bremen - Borussia M'gladbach 2 - 2">D</a>
                        <a href="/matches/2024/04/27/germany/bundesliga/fc-augsburg/sv-werder-bremen/4105495/" class="text-decoration-none bg-success text-white text-nowrap" title="Augsburg - Werder Bremen 0 - 3">W</a>
                        <a href="/matches/2024/04/21/germany/bundesliga/sv-werder-bremen/vfb-stuttgart-1893-ev/4105486/" class="text-decoration-none bg-success text-white text-nowrap" title="Werder Bremen - Stuttgart 2 - 1">W
                        </a>
                      </td>

                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="960">
                      </td>
                    </tr>
                    <tr class="team_rank even" id="team_rank_row_970" data-team_id="970">
                      <td class="rank">10</td>
                      <td class="direction">
                        <img src="imges/delta_min.gif" width="7" height="4" title="Previous rank: 7" alt="Previous rank: 7">
                      </td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/sc-freiburg/970/" title="Freiburg">Freiburg</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        11
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        9
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        14
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        45
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        58
                      </td>
                      <td class="number gd">-13</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        42
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/1-fc-union-berlin/sc-freiburg/4105516/" class="text-decoration-none bg-danger text-white text-nowrap" title="Union Berlin - Freiburg 2 - 1">L</a><a href="/matches/2024/05/11/germany/bundesliga/sc-freiburg/1-fc-heidenheim-1846/4105508/" class="text-decoration-none bg-success text-white text-nowrap" title="Freiburg - Heidenheim 1 - 1">D</a><a href="/matches/2024/05/04/germany/bundesliga/1-fc-koln/sc-freiburg/4105501/" class="text-decoration-none bg-success text-white text-nowrap" title="FC Cologne - Freiburg 0 - 0">D</a><a href="/matches/2024/04/27/germany/bundesliga/sc-freiburg/vfl-wolfsburg/4105490/" class="text-decoration-none bg-danger text-white text-nowrap" title="Freiburg - Wolfsburg 1 - 2">L</a><a href="/matches/2024/04/21/germany/bundesliga/sc-freiburg/1-fsv-mainz-05/4105481/" class="text-decoration-none bg-warning text-white text-nowrap" title="Freiburg - Mainz 1 - 1">D</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="970">
                      </td>
                    </tr>
                    <tr class="team_rank odd" id="team_rank_row_1000" data-team_id="1000">
                      <td class="rank">11</td>
                      <td class="direction">
                        <img src="imges/delta_plus.gif" width="7" height="4" title="Previous rank: 9" alt="Previous rank: 9">
                      </td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/fc-augsburg/1000/" title="Augsburg">Augsburg</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        10
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        9
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        15
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        50
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        60
                      </td>
                      <td class="number gd">-10</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        39
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/bayer-04-leverkusen/fc-augsburg/4105517/" class="text-decoration-none bg-danger text-white text-nowrap" title="Bayer Leverkusen - Augsburg 2 - 1">L</a><a href="/matches/2024/05/10/germany/bundesliga/fc-augsburg/vfb-stuttgart-1893-ev/4105513/" class="text-decoration-none bg-danger text-white text-nowrap" title="Augsburg - Stuttgart 0 - 1">L</a><a href="/matches/2024/05/04/germany/bundesliga/bv-borussia-09-dortmund/fc-augsburg/4105497/" class="text-decoration-none bg-danger text-white text-nowrap" title="Borussia Dortmund - Augsburg 5 - 1">L</a><a href="/matches/2024/04/27/germany/bundesliga/fc-augsburg/sv-werder-bremen/4105495/" class="text-decoration-none bg-danger text-white text-nowrap" title="Augsburg - Werder Bremen 0 - 3">L</a><a href="/matches/2024/04/19/germany/bundesliga/eintracht-frankfurt/fc-augsburg/4105482/" class="text-decoration-none bg-danger text-white text-nowrap" title="Eintracht Frankfurt - Augsburg 3 - 1">L</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="1000">
                      </td>
                    </tr>
                    <tr class="team_rank even" id="team_rank_row_968" data-team_id="968">
                      <td class="rank">12</td>
                      <td class="direction"></td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/vfl-wolfsburg/968/" title="Wolfsburg">Wolfsburg</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        10
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        7
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        17
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        41
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        56
                      </td>
                      <td class="number gd">-15</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        37
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/vfl-wolfsburg/1-fsv-mainz-05/4105519/" class="text-decoration-none bg-danger text-white text-nowrap" title="Wolfsburg - Mainz 1 - 3">L</a><a href="/matches/2024/05/12/germany/bundesliga/fc-bayern-munchen/vfl-wolfsburg/4105506/" class="text-decoration-none bg-danger text-white text-nowrap" title="Bayern Munich - Wolfsburg 2 - 0">L</a><a href="/matches/2024/05/04/germany/bundesliga/vfl-wolfsburg/sv-darmstadt-1898-ev/4105500/" class="text-decoration-none bg-success text-white text-nowrap" title="Wolfsburg - Darmstadt 3 - 0">W</a><a href="/matches/2024/04/27/germany/bundesliga/sc-freiburg/vfl-wolfsburg/4105490/" class="text-decoration-none bg-success text-white text-nowrap" title="Freiburg - Wolfsburg 1 - 2">W</a><a href="/matches/2024/04/20/germany/bundesliga/vfl-wolfsburg/vfl-bochum-1848-fussballgemeinschaft-ev/4105483/" class="text-decoration-none bg-success text-white text-nowrap" title="Wolfsburg - Bochum 1 - 0">W</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="968">
                      </td>
                    </tr>
                    <tr class="team_rank odd" id="team_rank_row_977" data-team_id="977">
                      <td class="rank">13</td>
                      <td class="direction">
                        <img src="imges/delta_plus.gif" width="7" height="4" title="Previous rank: 16" alt="Previous rank: 16">
                      </td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/1-fsv-mainz-05/977/" title="Mainz">Mainz</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        7
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        14
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        13
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        39
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        51
                      </td>
                      <td class="number gd">-12</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        35
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/vfl-wolfsburg/1-fsv-mainz-05/4105519/" class="text-decoration-none bg-success text-white text-nowrap" title="Wolfsburg - Mainz 1 - 3">W</a><a href="/matches/2024/05/11/germany/bundesliga/1-fsv-mainz-05/bv-borussia-09-dortmund/4105509/" class="text-decoration-none bg-success text-white text-nowrap" title="Mainz - Borussia Dortmund 3 - 0">W</a><a href="/matches/2024/05/05/germany/bundesliga/1-fc-heidenheim-1846/1-fsv-mainz-05/4105505/" class="text-decoration-none bg-success text-white text-nowrap" title="Heidenheim - Mainz 1 - 1">D</a><a href="/matches/2024/04/28/germany/bundesliga/1-fsv-mainz-05/1-fc-koln/4105492/" class="text-decoration-none bg-success text-white text-nowrap" title="Mainz - FC Cologne 1 - 1">D</a><a href="/matches/2024/04/21/germany/bundesliga/sc-freiburg/1-fsv-mainz-05/4105481/" class="text-decoration-none bg-warning text-white text-nowrap" title="Freiburg - Mainz 1 - 1">D</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="977">
                      </td>
                    </tr>
                    <tr class="team_rank even" id="team_rank_row_971" data-team_id="971">
                      <td class="rank">14</td>
                      <td class="direction">
                        <img src="imges/delta_plus.gif" width="7" height="4" title="Previous rank: 13" alt="Previous rank: 13">
                      </td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/borussia-monchengladbach/971/" title="Borussia M'gladbach">Borussia M'gla…</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        7
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        13
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        14
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        56
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        67
                      </td>
                      <td class="number gd">-11</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        34
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/vfb-stuttgart-1893-ev/borussia-monchengladbach/4105522/" class="text-decoration-none bg-danger text-white text-nowrap" title="Stuttgart - Borussia M'gladbach 4 - 0">L</a><a href="/matches/2024/05/11/germany/bundesliga/borussia-monchengladbach/eintracht-frankfurt/4105510/" class="text-decoration-none bg-success text-white text-nowrap" title="Borussia M'gladbach - Eintracht Frankfurt 1 - 1">D</a><a href="/matches/2024/05/04/germany/bundesliga/sv-werder-bremen/borussia-monchengladbach/4105503/" class="text-decoration-none bg-success text-white text-nowrap" title="Werder Bremen - Borussia M'gladbach 2 - 2">D</a><a href="/matches/2024/04/28/germany/bundesliga/borussia-monchengladbach/1-fc-union-berlin/4105493/" class="text-decoration-none bg-success text-white text-nowrap" title="Borussia M'gladbach - Union Berlin 0 - 0">D</a><a href="/matches/2024/04/20/germany/bundesliga/tsg-1899-hoffenheim-ev/borussia-monchengladbach/4105485/" class="text-decoration-none bg-danger text-white text-nowrap" title="Hoffenheim - Borussia M'gladbach 4 - 3">L</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="971">
                      </td>
                    </tr>
                    <tr class="team_rank odd" id="team_rank_row_1026" data-team_id="1026">
                      <td class="rank">15</td>
                      <td class="direction"></td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/1-fc-union-berlin/1026/" title="Union Berlin">Union Berlin</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        9
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        6
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        19
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        33
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        58
                      </td>
                      <td class="number gd">-25</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        33
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/1-fc-union-berlin/sc-freiburg/4105516/" class="text-decoration-none bg-success text-white text-nowrap" title="Union Berlin - Freiburg 2 - 1">W</a><a href="/matches/2024/05/11/germany/bundesliga/1-fc-koln/1-fc-union-berlin/4105511/" class="text-decoration-none bg-danger text-white text-nowrap" title="FC Cologne - Union Berlin 3 - 2">L</a><a href="/matches/2024/05/05/germany/bundesliga/1-fc-union-berlin/vfl-bochum-1848-fussballgemeinschaft-ev/4105498/" class="text-decoration-none bg-danger text-white text-nowrap" title="Union Berlin - Bochum 3 - 4">L</a><a href="/matches/2024/04/28/germany/bundesliga/borussia-monchengladbach/1-fc-union-berlin/4105493/" class="text-decoration-none bg-success text-white text-nowrap" title="Borussia M'gladbach - Union Berlin 0 - 0">D</a><a href="/matches/2024/04/20/germany/bundesliga/1-fc-union-berlin/fc-bayern-munchen/4105480/" class="text-decoration-none bg-danger text-white text-nowrap" title="Union Berlin - Bayern Munich 1 - 5">L</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="1026">
                      </td>
                    </tr>
                    <tr class="team_rank even" id="team_rank_row_965" data-team_id="965">
                      <td class="rank rank-orange">16</td>
                      <td class="direction">
                        <img src="imges/delta_min.gif" width="7" height="4" title="Previous rank: 14" alt="Previous rank: 14">
                      </td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/vfl-bochum-1848-fussballgemeinschaft-ev/965/" title="Bochum">Bochum</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        7
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        12
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        15
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        42
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        74
                      </td>
                      <td class="number gd">-32</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        33
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/sv-werder-bremen/vfl-bochum-1848-fussballgemeinschaft-ev/4105521/" class="text-decoration-none bg-danger text-white text-nowrap" title="Werder Bremen - Bochum 4 - 1">L</a><a href="/matches/2024/05/12/germany/bundesliga/vfl-bochum-1848-fussballgemeinschaft-ev/bayer-04-leverkusen/4105512/" class="text-decoration-none bg-danger text-white text-nowrap" title="Bochum - Bayer Leverkusen 0 - 5">L</a><a href="/matches/2024/05/05/germany/bundesliga/1-fc-union-berlin/vfl-bochum-1848-fussballgemeinschaft-ev/4105498/" class="text-decoration-none bg-success text-white text-nowrap" title="Union Berlin - Bochum 3 - 4">W</a><a href="/matches/2024/04/26/germany/bundesliga/vfl-bochum-1848-fussballgemeinschaft-ev/tsg-1899-hoffenheim-ev/4105494/" class="text-decoration-none bg-success text-white text-nowrap" title="Bochum - Hoffenheim 3 - 2">W</a><a href="/matches/2024/04/20/germany/bundesliga/vfl-wolfsburg/vfl-bochum-1848-fussballgemeinschaft-ev/4105483/" class="text-decoration-none bg-danger text-white text-nowrap" title="Wolfsburg - Bochum 1 - 0">L</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="965">
                      </td>
                    </tr>
                    <tr class="team_rank odd" id="team_rank_row_980" data-team_id="980">
                      <td class="rank rank-red">17</td>
                      <td class="direction"></td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/1-fc-koln/980/" title="FC Cologne">FC Cologne</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        5
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        12
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        17
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        28
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        60
                      </td>
                      <td class="number gd">-32</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        27
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/1-fc-heidenheim-1846/1-fc-koln/4105523/" class="text-decoration-none bg-danger text-white text-nowrap" title="Heidenheim - FC Cologne 4 - 1">L</a><a href="/matches/2024/05/11/germany/bundesliga/1-fc-koln/1-fc-union-berlin/4105511/" class="text-decoration-none bg-success text-white text-nowrap" title="FC Cologne - Union Berlin 3 - 2">W</a><a href="/matches/2024/05/04/germany/bundesliga/1-fc-koln/sc-freiburg/4105501/" class="text-decoration-none bg-success text-white text-nowrap" title="FC Cologne - Freiburg 0 - 0">D</a><a href="/matches/2024/04/28/germany/bundesliga/1-fsv-mainz-05/1-fc-koln/4105492/" class="text-decoration-none bg-success text-white text-nowrap" title="Mainz - FC Cologne 1 - 1">D</a><a href="/matches/2024/04/20/germany/bundesliga/1-fc-koln/sv-darmstadt-1898-ev/4105484/" class="text-decoration-none bg-danger text-white text-nowrap" title="FC Cologne - Darmstadt 0 - 2">L</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="980">
                      </td>
                    </tr>
                    <tr class="team_rank even" id="team_rank_row_2549" data-team_id="2549">
                      <td class="rank rank-red">18</td>
                      <td class="direction"></td>
                      <td class="text team large-link">
                        <a class="text-decoration-none text-nowrap" href="/teams/germany/sv-darmstadt-1898-ev/2549/" title="Darmstadt">Darmstadt</a>
                      </td>
                      <td class="number total mp" data-popup="competition_league_table_popup" data-column="mp">
                        34
                      </td>
                      <td class="number total won total_won" data-popup="competition_league_table_popup" data-column="total_won">
                        3
                      </td>
                      <td class="number total drawn total_drawn" data-popup="competition_league_table_popup" data-column="total_drawn">
                        8
                      </td>
                      <td class="number total lost total_lost" data-popup="competition_league_table_popup" data-column="total_lost">
                        23
                      </td>
                      <td class="number total gf total_gf" data-popup="competition_league_table_popup" data-column="total_gf">
                        30
                      </td>
                      <td class="number total ga total_ga" data-popup="competition_league_table_popup" data-column="total_ga">
                        86
                      </td>
                      <td class="number gd">-56</td>
                      <td class="number points" data-popup="competition_league_table_popup" data-column="points">
                        17
                      </td>
                      <td class="form">
                        <a href="/matches/2024/05/18/germany/bundesliga/bv-borussia-09-dortmund/sv-darmstadt-1898-ev/4105515/" class="text-decoration-none bg-danger text-white text-nowrap" title="Borussia Dortmund - Darmstadt 4 - 0">L</a><a href="/matches/2024/05/12/germany/bundesliga/sv-darmstadt-1898-ev/tsg-1899-hoffenheim-ev/4105514/" class="text-decoration-none bg-danger text-white text-nowrap" title="Darmstadt - Hoffenheim 0 - 6">L</a><a href="/matches/2024/05/04/germany/bundesliga/vfl-wolfsburg/sv-darmstadt-1898-ev/4105500/" class="text-decoration-none bg-danger text-white text-nowrap" title="Wolfsburg - Darmstadt 3 - 0">L</a><a href="/matches/2024/04/28/germany/bundesliga/sv-darmstadt-1898-ev/1-fc-heidenheim-1846/4105496/" class="text-decoration-none bg-danger text-white text-nowrap" title="Darmstadt - Heidenheim 0 - 1">L</a><a href="/matches/2024/04/20/germany/bundesliga/1-fc-koln/sv-darmstadt-1898-ev/4105484/" class="text-decoration-none bg-success text-white text-nowrap" title="FC Cologne - Darmstadt 0 - 2">W</a>
                      </td>
                      <td class="compare">
                        <input type="checkbox" name="team_ids[]" value="2549">
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!-- zeyadd -->
              </div>
            </div>`

myPlayes = `
 <div id="box_players" class="box_players">
              <nav id="navbar-example2" class="navbar navbar-light bg-info px-3">
                <a class="navbar-brand text-white fw-bold" href="#">Players</a>
                <ul class="nav nav-pills">
                  <li class="nav-item dropdown">
                    <a class="dropdown-toggle text-white fw-bold text-decoration-none fs-5" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Topscorers</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#scrollspyHeading3">Topscorers</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#scrollspyHeading4">Disciplinary</a>
                      </li>
                      <li><hr class="dropdown-divider"></li>
                      <li>
                        <a class="dropdown-item" href="#scrollspyHeading5">Assists</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div class="box-content">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      
                      <th scope="col">Player</th>
                      <th scope="col">Team</th>
                      <th scope="col">Asists</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="odd" data-people_id="206636">
                      <td class="player large-link">
                      
                        <a href="/players/alejandro-grimaldo-garcia/206636/" class="flag_16 left_16 spain_16_left">Álex Grimaldo</a>
                      </td>
                      <td class="team large-link">
                        <a href="/teams/germany/bayer-04-leverkusen/963/" title="Bayer Leverkusen"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/963.png">Leverkusen</a>
                      </td>
                      <td class="number assists" data-popup="player_events" data-column="assists">
                        13
                      </td>
                    </tr>
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="even" data-people_id="440862">
                      <td class="player large-link">
                        <a href="/players/jan-niklas-beste/440862/" class="flag_16 left_16 germany_16_left">J. Beste</a>
                      </td>
                      <td class="team large-link">
                        <a href="/teams/germany/1-fc-heidenheim-1846/5862/" title="Heidenheim"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/5862.png">Heidenheim</a>
                      </td>
                      <td class="number assists" data-popup="player_events" data-column="assists">
                        11
                      </td>
                    </tr>
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="odd" data-people_id="235441">
                      <td class="player large-link">
                        <a href="/players/julian-brandt/235441/" class="flag_16 left_16 germany_16_left">J. Brandt</a>
                      </td>
                      <td class="team large-link">
                        <a href="/teams/germany/bv-borussia-09-dortmund/964/" title="Borussia Dortmund"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/964.png">Dortmund</a>
                      </td>
                      <td class="number assists" data-popup="player_events" data-column="assists">
                        11
                      </td>
                    </tr>
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="even" data-people_id="278537">
                      <td class="player large-link">
                        <a href="/players/leroy-sane/278537/" class="flag_16 left_16 germany_16_left">L. Sané</a>
                      </td>
                      <td class="team large-link">
                        <a href="/teams/germany/fc-bayern-munchen/961/" title="Bayern Munich"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/961.png">Bayern</a>
                      </td>
                      <td class="number assists" data-popup="player_events" data-column="assists">
                        11
                      </td>
                    </tr>
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="odd" data-people_id="632952">
                      <td class="player large-link">
                        <a href="/players/xavi-simons/632952/" class="flag_16 left_16 netherlands_16_left">X. Simons</a>
                      </td>
                      <td class="team large-link">
                        <a href="/teams/germany/rb-leipzig/13410/" title="RB Leipzig"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/13410.png">Leipzig</a>
                      </td>
                      <td class="number assists" data-popup="player_events" data-column="assists">
                        11
                      </td>
                    </tr>
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="even more" data-people_id="560015">
                      <td class="player large-link">
                        <a href="/players/florian-wirtz/560015/" class="flag_16 left_16 germany_16_left">F. Wirtz</a>
                      </td>
                      <td class="team large-link">
                        <a href="/teams/germany/bayer-04-leverkusen/963/" title="Bayer Leverkusen"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/963.png">Leverkusen</a>
                      </td>
                      <td class="number assists" data-popup="player_events" data-column="assists">
                        11
                      </td>
                    </tr>
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="odd more" data-people_id="386977">
                      <td class="player large-link">
                        <a href="/players/ermedin-demirovi/386977/" class="flag_16 left_16 bosnia-herzegovina_16_left">E. Demirović</a>
                      </td>
                      <td class="team large-link">
                        <a href="/teams/germany/fc-augsburg/1000/" title="Augsburg"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/1000.png">Augsburg</a>
                      </td>
                      <td class="number assists" data-popup="player_events" data-column="assists">
                        9
                      </td>
                    </tr>
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="even more" data-people_id="182725">
                      <td class="player large-link">
                        <a href="/players/marvin-ducksch/182725/" class="flag_16 left_16 germany_16_left">M. Ducksch</a>
                      </td>
                      <td class="team large-link">
                        <a href="/teams/germany/sv-werder-bremen/960/" title="Werder Bremen"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/960.png">Bremen</a>
                      </td>
                      <td class="number assists" data-popup="player_events" data-column="assists">
                        9
                      </td>
                    </tr>
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="odd more" data-people_id="271269">
                      <td class="player large-link">
                        <a href="/players/franck-honorat/271269/" class="flag_16 left_16 france_16_left">F. Honorat</a>
                      </td>
                      <td class="team large-link">
                        <a href="/teams/germany/borussia-monchengladbach/971/" title="Borussia M'gladbach"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/971.png">M'gladbach</a>
                      </td>
                      <td class="number assists" data-popup="player_events" data-column="assists">
                        9
                      </td>
                    </tr>
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="even more" data-people_id="38215">
                      <td class="player large-link">
                        <a href="/players/thomas-muller/38215/" class="flag_16 left_16 germany_16_left">T. Müller</a>
                      </td>
                      <td class="team large-link">
                        <a href="/teams/germany/fc-bayern-munchen/961/" title="Bayern Munich"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/961.png">Bayern</a>
                      </td>
                      <td class="number assists" data-popup="player_events" data-column="assists">
                        9
                      </td>
                    </tr>
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="odd more" data-people_id="171941">
                      <td class="player large-link">
                        <a href="/players/kevin-stoger/171941/" class="flag_16 left_16 austria_16_left">K. Stöger</a>
                      </td>
                      <td class="team large-link">
                        <a href="/teams/germany/vfl-bochum-1848-fussballgemeinschaft-ev/965/" title="Bochum"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/965.png">Bochum</a>
                      </td>
                      <td class="number assists" data-popup="player_events" data-column="assists">
                        9
                      </td>
                    </tr>
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="even more" data-people_id="403237">
                      <td class="player large-link">
                        <a href="/players/deniz-undav/403237/" class="flag_16 left_16 germany_16_left">D. Undav</a>
                      </td>
                      <td class="team large-link">
                        <a href="/teams/germany/vfb-stuttgart-1893-ev/962/" title="Stuttgart"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/962.png">Stuttgart</a>
                      </td>
                      <td class="number assists" data-popup="player_events" data-column="assists">
                        9
                      </td>
                    </tr>
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="odd more" data-people_id="166369">
                      <td class="player large-link">
                        <a href="/players/niclas-fullkrug/166369/" class="flag_16 left_16 germany_16_left">N. Füllkrug</a>
                      </td>
                      <td class="team large-link">
                        <a href="/teams/germany/bv-borussia-09-dortmund/964/" title="Borussia Dortmund"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/964.png">Dortmund</a>
                      </td>
                      <td class="number assists" data-popup="player_events" data-column="assists">
                        8
                      </td>
                    </tr>
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="even more" data-people_id="254873">
                      <td class="player large-link">
                        <a href="/players/vincenzo-grifo/254873/" class="flag_16 left_16 italy_16_left">V. Grifo</a>
                      </td>
                      <td class="team large-link">
                        <a href="/teams/germany/sc-freiburg/970/" title="Freiburg"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/970.png">Freiburg</a>
                      </td>
                      <td class="number assists" data-popup="player_events" data-column="assists">
                        8
                      </td>
                    </tr>
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="odd more" data-people_id="158575">
                      <td class="player large-link">
                        <a href="/players/harry-kane/158575/" class="flag_16 left_16 england_16_left">H. Kane</a>
                      </td>
                      <td class="team large-link">
                        <a href="/teams/germany/fc-bayern-munchen/961/" title="Bayern Munich"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/961.png">Bayern</a>
                      </td>
                      <td class="number assists" data-popup="player_events" data-column="assists">
                        8
                      </td>
                    </tr>
                    <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="odd more" data-people_id="158575">
                    <td class="player large-link">
                      <a href="/players/harry-kane/158575/" class="flag_16 left_16 england_16_left">H. Kane</a>
                    </td>
                    <td class="team large-link">
                      <a href="/teams/germany/fc-bayern-munchen/961/" title="Bayern Munich"><img src="https://secure.cache.images.core.optasports.com/soccer/teams/30x30/961.png">Bayern</a>
                    </td>
                    <td class="number assists" data-popup="player_events" data-column="assists">
                      8
                    </td>
                  </tr>
                  
                  <tr data-expand="page_competition_1_block_competition_playerstats_12_block_competition_playerstats_assists_1" class="odd more" data-people_id="158575">
                    <td colspan="3" class="  player large-link">
                      <nav class="" aria-label="Page navigation example ">
                        <ul class="pagination d-flex justify-content-center mt-2 pagination-lg ">
                          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                      </nav>  
                    
                      
                  
                       
                    </td>
                  </tr>
                  </tbody>
                  
                </table>
              </div>
            </div>
 `           