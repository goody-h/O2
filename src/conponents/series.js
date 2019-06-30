const series = {
    list: [
        "12 Monkeys", "13 Reasons Why", "24", "24 Legacy", "3 Percent", "5th Ward", "911", "A Discovery of Witches", "A Million Little Things",
        "A Place to Call Home", "A Series of Unfortunate Events", "A Very English Scandal", "Absentia", "Agents of SHIELD", "All American",
        "Almost Human", "Altered Carbon", "Ambitions", "American Crime Story", "American Horror Story", "American Princess", "American Vandal",
        "Animal Kingdom", "Anne", "APB", "Aquarius", "Atlanta", "Atypical", "Bad Blood", "Ballers", "Banshee", "Baptiste", "Baskets", "Beauty And The Beast",
        "Beecham House", "Better Call Saul", "Better Things", "Beyond", "Big Little Lies", "Billions", "Black Lightning", "Black Mirror", "Black Summer",
        "Blindspot", "Blood", "Bloodline", "Bloom", "Blue Bloods", "Bodyguard", "BoJack Horseman", "Bonding", "Bones", "Bosch", "Breaking Bad", "Britannia",
        "Brockmire", "Bronx SIU", "Bull", "Burden of Truth", "Burn Notice", "Butterfly", "Californication", "Call the Midwife", "Cardinal", "Carter",
        "Castle", "Castle Rock", "Casual", "Chambers", "Channel Zero", "Charmed", "Chernobyl", "Chesapeake Shores", "Chicago Fire", "Chicago Justice",
        "Chicago Med", "Chicago PD", "Chilling Adventures of Sabrina", "Chimerica", "City on a Hill", "Claws", "Cleaning Up", "Clique", "Cloak and Dagger",
        "Cobra Kai", "Code Black", "Cold Feet", "Colony", "Containment", "Coroner", "Counterpart", "Criminal Minds", "Crisis", "Crossbones",
        "Curfew", "Da Vincis Demons", "Damnation", "Dark", "Dark Heart", "Dark Matter", "Dead to Me", "Deadly Class", "Dear White People",
        "Death and Nightingales", "Death in Paradise", "Deception", "Deep State", "Delhi Crime", "Delicious", "Designated Survivor",
        "Devious Maids", "Dexter", "Diggstown", "Dirty John", "Doctor Doctor", "Doctor Who", "Dogs of Berlin", "Dominion", "Doom Patrol",
        "Downton Abbey", "Dracula", "Dynasty", "Elementary", "Elite", "Emerald City", "Empire", "Endeavour", "Escape at Dannemora", "Euphoria",
        "Extant", "Falling Water", "Famous in Love", "Fargo", "Father Brown", "FBI", "Fear the Walking Dead", "Fearless", "Feud", "Fleabag",
        "For the People", "Forever", "Fortitude", "Fosse Verdon", "Frequency", "Friends from College", "Fringe", "Game of Thrones", "Genius",
        "Gentleman Jack", "Ghost Wars", "Girlfriends Guide to Divorce", "Glee", "Glow", "God Friended Me", "Goliath", "Gomorrah", "Good Behavior",
        "Good Girls", "Good Trouble", "Good Witch", "Gotham", "Grand Hotel", "Grantchester", "Greenhouse Academy", "Greenleaf", "Greys Anatomy",
        "Grimm", "Grisse", "Halt and Catch Fire", "Hanna", "Hannibal", "Harlots", "Harrow", "Hart Of Dixie", "Hatton Garden",
        "Heartland", "Here and Now", "Hidden", "High Maintenance", "High Seas", "Homecoming", "Homeland", "Hostages", "House MD", "House of Cards",
        "How to Get Away with Murder", "How to Sell Drugs Online Fast", "Humans", "Hunters", "I am Dying Up Here", "I Am the Night", "Imposters", "In the Dark",
        "Insatiable", "Insomnia", "Instinct", "Into the Badlands", "iZombie", "Jack Ryan", "Jacqueline and Jilly", "Jane The Virgin", "Jessica Jones", "Jett",
        "Jinn", "Kevin Probably Saves the World", "Kidding", "Kingdom", "Knightfall", "Krypton", "Legacies", "Legends",
        "Legion", "Les Miserables", "Lethal Weapon", "Life Sentence", "Limitless", "Line of Duty", "Lodge 49", "Lost", "Luke Cage", "Luther",
        "MacGyver", "Madam Secretary", "Manhattan", "Maniac", "Manifest", "Marcella", "Mars", "Mary Kills People", "Mayans MC", "McMafia",
        "Medici Masters of Florence", "Midnight Texas", "Mindhunter", "Mistresses", "Mom", "Mosaic", "Mozart in the Jungle", "Mr Inbetween",
        "Mr. Robot", "Mrs. Wilson", "Murder in the First", "Murdoch Mysteries", "My Brilliant Friend", "Mystery Road", "Narcos", "Narcos Mexico",
        "Nashville", "NCIS", "New Amsterdam", "Nikita", "No Offence", "No Tomorrow", "Northern Rescue",
        "Orange Is The New Black", "Orphan Black", "Outlander", "Outsiders", "Ozark", "Patrick Melrose", "Patriot", "Peaky Blinders", "Penny Dreadful",
        "Perpetual Grace LTD", "Person of Interest", "Picnic at Hanging Rock", "Pine Gap", "Pitch", "Playing with Fire", "Poldark", "Power", "Preacher",
        "Press", "Pretty Little Liars", "Prison Break", "Private Eyes", "Proven Innocent", "Pure", "Pure 2019",
        "Quantico", "Quarry", "Queen of the South", "Queen Sugar", "Quicksand", "Rake", "Ransom", "Ravenswood", "Ray Donovan", "Red Band Society",
        "Reef Break", "Reign", "Resurrection", "Revenge", "Reverie", "Revolution", "Rise", "Riverdale", "Riviera", "Room 104", "Roswell New Mexico",
        "Runaways", "Sacred Games", "Safe", "Salem", "Salvation", "Satisfaction", "Scandal", "Scorpion", "SEAL Team", "Secrets And Lies", "Sense8",
        "Seven Seconds", "Sex Education", "Shades of Blue", "Shadowhunters", "Shameless", "Sharp Objects", "Sherlock", "Shetland", "Shooter", "Shut Eye",
        "Siren", "Six", "Slasher", "Sleepy Hollow", "Sneaky Pete", "Snowfall", "Sons of Anarchy", "Sorry for Your Loss", "Stan Lees Lucky Man", "Star",
        "Station 19", "Strange Angel", "Stranger Things", "Strangers", "Street Legal", "Strike", "Strike Back", "Succession", "Suits", "Summer of Rockets",
        "Supernatural", "Swamp Thing", "Sweetbitter", "Taboo", "Take Two", "Taken", "Tales of the City", "Teen Wolf", "Ten Days in the Valley", "The ABC Murders",
        "The Act", "The Affair", "The Alienist", "The Americans", "The Arrangement", "The Astronaut Wives Club", "The Bad Seed", "The Bastard Executioner",
        "The Bay", "The Blacklist", "The Bold Type", "The Brave", "The Chi", "The Code", "The Crossing", "The Crown", "The Dangerous Book for Boys",
        "The Deuce", "The Durrells", "The End of the Fucking World", "The Enemy Within", "The Expanse", "The Family Business", "The First", "The Fix", "The Flash",
        "The Following", "The Fosters", "The Girlfriend Experience", "The Good Cop", "The Good Doctor", "The Good Fight", "The Good Karma Hospital",
        "The Good Place", "The Good Wife", "The Handmaids Tale", "The Haunting of Hill House", "The Hollow", "The Hot Zone", "The InBetween",
        "The Knick", "The Last Kingdom", "The Last Ship", "The Leftovers", "The Little Drummer Girl", "The Looming Tower", "The Magicians",
        "The Man in the High Castle", "The Marvelous Mrs. Maisel", "The Mechanism", "The Mentalist", "The Missing", "The Mist", "The Murders",
        "The Name of the Rose", "The Night Of", "The OA", "The Oath", "The Order", "The Originals", "The Orville", "The Passage", "The Path",
        "The Pier", "The Red Line", "The Resident", "The Returned", "The Rich and the Ruthless", "The Romanoffs", "The Rookie", "The Royals",
        "The Society", "The Son", "The Spanish Princess", "The Staircase", "The Strain", "The Terror", "The Tomorrow People", "The Truth About the Harry Quebert Affair",
        "The Twilight Zone", "The Vampire Diaries", "The Victim", "The Village", "The Virtues", "The Walking Dead", "The Whispers", "The Wire",
        "This Is Us", "Tidelands", "Timeless", "Tin Star", "Too Old to Die Young", "Top Boy", "Trinkets", "True Blood",
        "True Detective", "Trust", "Trust Me", "Twin Peaks", "Twisted", "Tyrant", "Under The Dome", "Unforgotten", "UnREAL", "Unspeakable",
        "Valor", "Van Helsing", "Vanity Fair", "Vera", "Victoria", "Vida", "Vikings", "Vinyl", "Waco", "Wanderlust", "War and Peace", "Warrior",
        "Wayward Pines", "Wentworth", "When Calls the Heart", "When They See Us", "White Collar", "Will", "Wisdom of the Crowd", "Witches of East End",
        "Wolf Creek", "Wynonna Earp", "Years and Years", "Yellowstone", "You", "You Are Wanted", "You Me Her", "Z Nation", "Zoo"
    ],
    irregulars: [
        "Catch-22", "Hawaii Five-0", "Law And Order - SVU", "NCIS - Los Angeles", "NCIS - New Orleans", "Pretty Little Liars - The Perfectionists",
        "The Blacklist - Redemption", "The X-Files",
    ]
}

export default series