// Standard year/category/ structure
export interface Year {
	name: string;
	categoryId: number;
  includedPosts?: number[];
  excludedPosts?: number[];
}

// For child that has further sub-children, but with no useful categoryId itself
export interface GroupedYear {
	name: string;
	children: Year[];
}

// An item in the year catalog can be either a standard or grouped
export type YearItem = Year | GroupedYear;

export type YearCatalog = {
  categoryId: number;
  posts?: YearItem[];
  includedPosts?: number[];
  excludedPosts?: number[];
}

// Record<string, YearCatalog> ensures TS knows exact structure
export const ARCHIVE: Record<string, YearCatalog> = {
  "2025-26": {
    categoryId: 782797218,
    posts: [
      { name: "General Notifications 2025-26", categoryId: 0, includedPosts: [ 1751, 1745, 1734 ] }, // [ Verdict on Negligence of Duties by Union Council Members, Ad-Hoc Procedures and Directives for the ORM, Termination of Tenure – 20/01/2026 ]
      { name: "SU By-Elections 2025-26", categoryId: 0, includedPosts: [ 1740, 1722, 1718 ] }, // [ Results of the Students’ Union By-Elections 2025-2026, Common Room Debate Schedule (SU By-Elections 2025-26), List of Candidates (SU By-Elections 2025-26) ]
      { name: "SU Elections 2025-26", categoryId: 0, includedPosts: [ 1697, 1686, 1680, 1673, 1669, 1652, 1647, 1597, 1593, 1588, 1585 ] }, // [ Notice: Violation of Election Guidelines [SU Elections 2025-26], Notice: Violation of Election Guidelines [SU Elections 2025-26], Notice for Curtailed Campaigning [SU Elections 2025-26], Notice: Violation of Election Guidelines [SU Elections 2025-26], Notice for Curtailed Campaigning [SU Elections 2025-26], Final List Of Candidates [SU Elections 2025-26], Withdrawal Notice [SU Elections 2025-26], [Students’ Union Elections 2025-26] Timeline, [Students’ Union Elections 2025-26] Call for Nominations, [Students’ Union Elections 2025-26] Election Guidelines, [Students’ Union Elections 2025-26] Voting Eligibility ]
    ],
    includedPosts: [ 1751, 1745, 1734, 1740, 1722, 1718, 1697, 1686, 1680, 1673, 1669, 1652, 1647, 1597, 1593, 1588, 1585 ] // See above
  },
  "2024-25": {
    categoryId: 0,
    posts: [
      { name: "General Notifications 2024-25", categoryId: 0, includedPosts: [ 1547 ] }, // [ Motion Vetting for ARM 2025 ]
      { name: "SU By-Elections 2024-25", categoryId: 0, includedPosts: [ 1533, 1530, 1527, 1515, 1506, 1494, 1490, 1485, 1478, 1474, 1471, 1464, 1460, 1454 ] }, // [ Revised Timeline [SU By-Elections 2024-25], Candidate Information [SU By-Elections 2024-25], List of Candidates – [SU By-Elections 2024-25], Call for Nominations [SU By-Elections 2024-25], Timeline [SU By-Elections 2024-25], Results of the Students’ Union By-Elections 2024-2025, Final List Of Candidates [SU By-Elections 2024-25], Withdrawal Notice [SU By-Elections 2024-25], Common Room Debates [SU By-Elections 2024-25], ( Candidate Manifestos, SOPs and Lists of Campaigners) , List of Candidates [SU By-Elections 2024-25], Revised Timeline [SU By-Elections 2024-25], Timeline [SU By-Elections 2024-25], Call for Nominations [SU By-Elections 2024-25] ]
			{ name: "SU Elections 2024-25", categoryId: 0, includedPosts: [ 1450, 1447, 1442, 1437, 1429, 1425, 1419, 1415, 1406, 1402, 1386, 1390, 1343, 1369, 1365, 1339, 1332, 1321, 1318, 1315, 1310, 1303 ] }, // [ Results of the Students’ Union Elections 2024-2025, Notice: Violation of Election Guidelines [SUE_2024-25], Notice: Violation of Election Guidelines [SUE_2024-25], Notice: Violation of Election Guidelines [SUE_2024-25], Notice: Violation of Election Guidelines [SUE_2024-25], Notice for Curtailed Campaigning [SU Elections 2024-25], Notice: Violation of Election Guidelines[SU Elections 2024-25], Notice for Curtailed Campaigning [SU Elections 2024-25], Violation of Election Guidelines [SU Elections 2024-25], Notice for Curtailed Campaigning [SU Elections 2024-25], Final List Of Candidates [SU Elections 2024-25], Withdrawal Notice [SU Elections 2024-25], Common Room Debates [SU Elections 2024-25], ( Candidate Manifestos, SOPs and Lists of Campaigners ) , Revised Timeline [SU Elections 2024-25], List of Candidates [SU Elections 2024-25], Timeline [SU Elections 2024-25], Election Guidelines [SU Elections 2024-25], Document Templates [SU Elections 2024-25], Nomination Form [SU Elections 2024-25], Call for Nominations [SU Elections 2024-25], Grey Period Guidelines [SU Elections 2024-25] ]
    ],
    includedPosts: [ 1547, 1533, 1530, 1527, 1515, 1506, 1494, 1490, 1485, 1478, 1474, 1471, 1464, 1460, 1454, 1450, 1447, 1442, 1437, 1429, 1425, 1419, 1415, 1406, 1402, 1386, 1390, 1343, 1369, 1365, 1339, 1332, 1321, 1318, 1315, 1310, 1303 ] // See above
  },
  "2023-24": {
    categoryId: 764436060,
    posts: [
			{ name: "SU Elections 2023-24", categoryId: 764436060, excludedPosts: [ 1751, 1745, 1734, 1740, 1722, 1718, 1697, 1686, 1680, 1673, 1669, 1652, 1647, 1597, 1593, 1588, 1585, 1547, 1533, 1530, 1527, 1515, 1506, 1494, 1490, 1485, 1478, 1474, 1471, 1464, 1460, 1454, 1450, 1447, 1442, 1437, 1429, 1425, 1419, 1415, 1406, 1402, 1386, 1390, 1343, 1369, 1365, 1339, 1332, 1321, 1318, 1315, 1310, 1303 ] }, // See above
    ],
    excludedPosts: [ 1751, 1745, 1734, 1740, 1722, 1718, 1697, 1686, 1680, 1673, 1669, 1652, 1647, 1597, 1593, 1588, 1585, 1547, 1533, 1530, 1527, 1515, 1506, 1494, 1490, 1485, 1478, 1474, 1471, 1464, 1460, 1454, 1450, 1447, 1442, 1437, 1429, 1425, 1419, 1415, 1406, 1402, 1386, 1390, 1343, 1369, 1365, 1339, 1332, 1321, 1318, 1315, 1310, 1303 ]
  },
  "2022-23": {
    categoryId: 0,
    posts: [
      { name: "SU By-Elections 2022-23", categoryId: 764436063 },
			{ name: "SU Elections 2022-23", categoryId: 764436065 },
    ],
    includedPosts: [ 926, 922, 945, 933, 936, 941 ] // [ ( Violation of Guidelines – 18th September, 2022 ), Violation of Election Guidelines by Mr Udbhav Awasthi, List of Candidates for SU By-Elections, Guidelines for SU By-Elections 2022-23, Grey Period: SU By-Elections 2022-23, Timeline for By-Elections 2022-23 ]
  },
  "2021-22": {
    categoryId: 721096565,
    posts: [
      // { name: "General Notifications 2021-22", categoryId: 721096571 },
      // { name: "Campaign Bans 2021-22", categoryId: 721096569 },
			{ name: "SU Elections 2021-22", categoryId: 721096565 },
    ]
  },
  "2018-19": {
    categoryId: 607974615,
    posts: [
      // { name: "General Notifications 2018-19", categoryId: 720468391 },
      // { name: "Campaign Bans 2018-19", categoryId: 720468187 },
			{ name: "SU Elections 2018-19", categoryId: 607974615 },
    ]
  },
  "2017-18": {
    categoryId: 585762715,
    posts: [
      { name: "SU Elections 2017-18", categoryId: 585762715 },
    ]
  },
  "2016-17": {
    categoryId: 526906542,
    posts: [
      // { name: "Notices 2016-17", categoryId: 526906542 },
			// { name: "Campaign Bans 2016-17", categoryId: 529712268, includedPosts: [ 231 ] }, // [ Curtailed Campaigning (Presidential Candidate) : 9th August ]
      { name: "SU Elections 2016-17", categoryId: 526906542 },
    ]
  },
  "2015-16": {
    categoryId: 526892630,
    posts: [
      // { name: "Notices 2015-16", categoryId: 526892630 },
			// { name: "Campaign Bans 2015-16", categoryId: 526892978 },
      { name: "SU Elections 2015-16", categoryId: 526892630 },
    ]
  },
};

// For order of years on screen, as any string format changes eg. 'Special Notices' would interfere with Object.keys(TFP_CATALOG).reverse()
export const ARCHIVE_ORDER = [
  "2025-26",
  "2024-25",
  "2023-24",
  "2022-23",
  "2021-22",
  "2018-19",
  "2017-18",
  "2016-17",
  "2015-16",
];