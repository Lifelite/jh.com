export const OptionSettings = {
    Difficulty: null,
    DayTimeSpeedRate: 1.000000,
    NightTimeSpeedRate: 1.000000,
    ExpRate: 1.000000,
    PalCaptureRate: 1.000000,
    PalSpawnNumRate: 1.000000,
    PalDamageRateAttack: 1.000000,
    PalDamageRateDefense: 1.000000,
    PlayerDamageRateAttack: 1.000000,
    PlayerDamageRateDefense: 1.000000,
    PlayerStomachDecreaseRate: 1.000000,
    PlayerStaminaDecreaseRate: 1.000000,
    PlayerAutoHPRegeneRate: 1.000000,
    PlayerAutoHpRegeneRateInSleep: 1.000000,
    PalStomachDecreaseRate: 1.000000,
    PalStaminaDecreaseRate: 1.000000,
    PalAutoHPRegeneRate: 1.000000,
    PalAutoHpRegeneRateInSleep: 1.000000,
    BuildObjectDamageRate: 1.000000,
    BuildObjectDeteriorationDamageRate: 1.000000,
    CollectionDropRate: 1.000000,
    CollectionObjectHpRate: 1.000000,
    CollectionObjectRespawnSpeedRate: 1.000000,
    EnemyDropItemRate: 1.000000,
    DeathPenalty: "All",
    bEnablePlayerToPlayerDamage: false,
    bEnableFriendlyFire: false,
    bEnableInvaderEnemy: true,
    bActiveUNKO: false,
    bEnableAimAssistPad: true,
    bEnableAimAssistKeyboard: false,
    DropItemMaxNum: 3000,
    DropItemMaxNum_UNKO: 100,
    BaseCampMaxNum: 128,
    BaseCampWorkerMaxNum: 15,
    DropItemAliveMaxHours: 1.000000,
    bAutoResetGuildNoOnlinePlayers: false,
    AutoResetGuildTimeNoOnlinePlayers: 72.000000,
    GuildPlayerMaxNum: 20,
    PalEggDefaultHatchingTime: 72.000000,
    WorkSpeedRate: 1.000000,
    bIsMultiplay: false,
    bIsPvP: false,
    bCanPickupOtherGuildDeathPenaltyDrop: false,
    bEnableNonLoginPenalty: false,
    bEnableFastTravel: true,
    bIsStartLocationSelectByMap: true,
    bExistPlayerAfterLogout: false,
    bEnableDefenseOtherGuildPlayer: false,
    CoopPlayerMaxNum: 4,
    ServerPlayerMaxNum: 32,
    ServerName: "",
    ServerDescription: "",
    AdminPassword: "",
    ServerPassword: "",
    PublicPort: 8211,
    PublicIP: "",
    RCONEnabled: false,
    RCONPort: 25575,
    Region: "",
    bUseAuth: true,
    BanListURL: "https://api.palworldgame.com/api/banlist.txt"
};

import {useState} from 'react';

const FormStatesHandlers = () => {
    const [Difficulty, setDifficulty] = useState(null);
    const [DayTimeSpeedRate, setDayTimeSpeedRate] = useState(1.000000);
    const [NightTimeSpeedRate, setNightTimeSpeedRate] = useState(1.000000);
    const [ExpRate, setExpRate] = useState(1.000000);
    const [PalCaptureRate, setPalCaptureRate] = useState(1.000000);
    const [PalSpawnNumRate, setPalSpawnNumRate] = useState(1.000000);
    const [PalDamageRateAttack, setPalDamageRateAttack] = useState(1.000000);
    const [PalDamageRateDefense, setPalDamageRateDefense] = useState(1.000000);
    const [PlayerDamageRateAttack, setPlayerDamageRateAttack] = useState(1.000000);
    const [PlayerDamageRateDefense, setPlayerDamageRateDefense] = useState(1.000000);
    const [PlayerStomachDecreaseRate, setPlayerStomachDecreaseRate] = useState(1.000000);
    const [PlayerStaminaDecreaseRate, setPlayerStaminaDecreaseRate] = useState(1.000000);
    const [PlayerAutoHPRegeneRate, setPlayerAutoHPRegeneRate] = useState(1.000000);
    const [PlayerAutoHpRegeneRateInSleep, setPlayerAutoHpRegeneRateInSleep] = useState(1.000000);
    const [PalStomachDecreaseRate, setPalStomachDecreaseRate] = useState(1.000000);
    const [PalStaminaDecreaseRate, setPalStaminaDecreaseRate] = useState(1.000000);
    const [PalAutoHPRegeneRate, setPalAutoHPRegeneRate] = useState(1.000000);
    const [PalAutoHpRegeneRateInSleep, setPalAutoHpRegeneRateInSleep] = useState(1.000000);
    const [BuildObjectDamageRate, setBuildObjectDamageRate] = useState(1.000000);
    const [BuildObjectDeteriorationDamageRate, setBuildObjectDeteriorationDamageRate] = useState(1.000000);
    const [CollectionDropRate, setCollectionDropRate] = useState(1.000000);
    const [CollectionObjectHpRate, setCollectionObjectHpRate] = useState(1.000000);
    const [CollectionObjectRespawnSpeedRate, setCollectionObjectRespawnSpeedRate] = useState(1.000000);
    const [EnemyDropItemRate, setEnemyDropItemRate] = useState(1.000000);
    const [DeathPenalty, setDeathPenalty] = useState("All");
    const [bEnablePlayerToPlayerDamage, setbEnablePlayerToPlayerDamage] = useState(false);
    const [bEnableFriendlyFire, setbEnableFriendlyFire] = useState(false);
    const [bEnableInvaderEnemy, setbEnableInvaderEnemy] = useState(true);
    const [bActiveUNKO, setbActiveUNKO] = useState(false);
    const [bEnableAimAssistPad, setbEnableAimAssistPad] = useState(true);
    const [bEnableAimAssistKeyboard, setbEnableAimAssistKeyboard] = useState(false);
    const [DropItemMaxNum, setDropItemMaxNum] = useState(3000);
    const [DropItemMaxNum_UNKO, setDropItemMaxNum_UNKO] = useState(100);
    const [BaseCampMaxNum, setBaseCampMaxNum] = useState(128);
    const [BaseCampWorkerMaxNum, setBaseCampWorkerMaxNum] = useState(15);
    const [DropItemAliveMaxHours, setDropItemAliveMaxHours] = useState(1.000000);
    const [bAutoResetGuildNoOnlinePlayers, setbAutoResetGuildNoOnlinePlayers] = useState(false);
    const [AutoResetGuildTimeNoOnlinePlayers, setAutoResetGuildTimeNoOnlinePlayers] = useState(72.000000);
    const [GuildPlayerMaxNum, setGuildPlayerMaxNum] = useState(20);
    const [PalEggDefaultHatchingTime, setPalEggDefaultHatchingTime] = useState(72.000000);
    const [WorkSpeedRate, setWorkSpeedRate] = useState(1.000000);
    const [bIsMultiplay, setbIsMultiplay] = useState(false);
    const [bIsPvP, setbIsPvP] = useState(false);
    const [bCanPickupOtherGuildDeathPenaltyDrop, setbCanPickupOtherGuildDeathPenaltyDrop] = useState(false);
    const [bEnableNonLoginPenalty, setbEnableNonLoginPenalty] = useState(false);
    const [bEnableFastTravel, setbEnableFastTravel] = useState(true);
    const [bIsStartLocationSelectByMap, setbIsStartLocationSelectByMap] = useState(true);
    const [bExistPlayerAfterLogout, setbExistPlayerAfterLogout] = useState(false);
    const [bEnableDefenseOtherGuildPlayer, setbEnableDefenseOtherGuildPlayer] = useState(false);
    const [CoopPlayerMaxNum, setCoopPlayerMaxNum] = useState(4);
    const [ServerPlayerMaxNum, setServerPlayerMaxNum] = useState(32);
    const [ServerName, setServerName] = useState("");
    const [ServerDescription, setServerDescription] = useState("");
    const [AdminPassword, setAdminPassword] = useState("");
    const [ServerPassword, setServerPassword] = useState("");
    const [PublicPort, setPublicPort] = useState(8211);
    const [PublicIP, setPublicIP] = useState("");
    const [RCONEnabled, setRCONEnabled] = useState(false);
    const [RCONPort, setRCONPort] = useState(25575);
    const [Region, setRegion] = useState("");
    const [bUseAuth, setbUseAuth] = useState(true);
    const [BanListURL, setBanListURL] = useState("https://api.palworldgame.com/api/banlist.txt");

    const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value);
    };

    const handleDayTimeSpeedRateChange = (e) => {
        setDayTimeSpeedRate(e.target.value);
    };

    const handleNightTimeSpeedRateChange = (e) => {
        setNightTimeSpeedRate(e.target.value);
    };

    const handleExpRateChange = (e) => {
        setExpRate(e.target.value);
    };

    const handlePalCaptureRateChange = (e) => {
        setPalCaptureRate(e.target.value);
    };

    const handlePalSpawnNumRateChange = (e) => {
        setPalSpawnNumRate(e.target.value);
    };

    const handlePalDamageRateAttackChange = (e) => {
        setPalDamageRateAttack(e.target.value);
    };

    const handlePalDamageRateDefenseChange = (e) => {
        setPalDamageRateDefense(e.target.value);
    };

    const handlePlayerDamageRateAttackChange = (e) => {
        setPlayerDamageRateAttack(e.target.value);
    };

    const handlePlayerDamageRateDefenseChange = (e) => {
        setPlayerDamageRateDefense(e.target.value);
    };

    const handlePlayerStomachDecreaseRateChange = (e) => {
        setPlayerStomachDecreaseRate(e.target.value);
    };

    const handlePlayerStaminaDecreaseRateChange = (e) => {
        setPlayerStaminaDecreaseRate(e.target.value);
    };

    const handlePlayerAutoHPRegeneRateChange = (e) => {
        setPlayerAutoHPRegeneRate(e.target.value);
    };

    const handlePlayerAutoHpRegeneRateInSleepChange = (e) => {
        setPlayerAutoHpRegeneRateInSleep(e.target.value);
    };

    const handlePalStomachDecreaseRateChange = (e) => {
        setPalStomachDecreaseRate(e.target.value);
    };

    const handlePalStaminaDecreaseRateChange = (e) => {
        setPalStaminaDecreaseRate(e.target.value);
    };

    const handlePalAutoHPRegeneRateChange = (e) => {
        setPalAutoHPRegeneRate(e.target.value);
    };

    const handlePalAutoHpRegeneRateInSleepChange = (e) => {
        setPalAutoHpRegeneRateInSleep(e.target.value);
    };

    const handleBuildObjectDamageRateChange = (e) => {
        setBuildObjectDamageRate(e.target.value);
    };

    const handleBuildObjectDeteriorationDamageRateChange = (e) => {
        setBuildObjectDeteriorationDamageRate(e.target.value);
    };

    const handleCollectionDropRateChange = (e) => {
        setCollectionDropRate(e.target.value);
    };

    const handleCollectionObjectHpRateChange = (e) => {
        setCollectionObjectHpRate(e.target.value);
    };

    const handleCollectionObjectRespawnSpeedRateChange = (e) => {
        setCollectionObjectRespawnSpeedRate(e.target.value);
    };

    const handleEnemyDropItemRateChange = (e) => {
        setEnemyDropItemRate(e.target.value);
    };

    const handleDeathPenaltyChange = (e) => {
        setDeathPenalty(e.target.value);
    };

    const handlebEnablePlayerToPlayerDamageChange = (e) => {
        setbEnablePlayerToPlayerDamage(e.target.value);
    };

    const handlebEnableFriendlyFireChange = (e) => {
        setbEnableFriendlyFire(e.target.value);
    };

    const handlebEnableInvaderEnemyChange = (e) => {
        setbEnableInvaderEnemy(e.target.value);
    };

    const handlebActiveUNKOChange = (e) => {
        setbActiveUNKO(e.target.value);
    };

    const handlebEnableAimAssistPadChange = (e) => {
        setbEnableAimAssistPad(e.target.value);
    };

    const handlebEnableAimAssistKeyboardChange = (e) => {
        setbEnableAimAssistKeyboard(e.target.value);
    };

    const handleDropItemMaxNumChange = (e) => {
        setDropItemMaxNum(e.target.value);
    };

    const handleDropItemMaxNum_UNKOChange = (e) => {
        setDropItemMaxNum_UNKO(e.target.value);
    };

    const handleBaseCampMaxNumChange = (e) => {
        setBaseCampMaxNum(e.target.value);
    };

    const handleBaseCampWorkerMaxNumChange = (e) => {
        setBaseCampWorkerMaxNum(e.target.value);
    };

    const handleDropItemAliveMaxHoursChange = (e) => {
        setDropItemAliveMaxHours(e.target.value);
    };

    const handlebAutoResetGuildNoOnlinePlayersChange = (e) => {
        setbAutoResetGuildNoOnlinePlayers(e.target.value);
    };

    const handleAutoResetGuildTimeNoOnlinePlayersChange = (e) => {
        setAutoResetGuildTimeNoOnlinePlayers(e.target.value);
    };

    const handleGuildPlayerMaxNumChange = (e) => {
        setGuildPlayerMaxNum(e.target.value);
    };

    const handlePalEggDefaultHatchingTimeChange = (e) => {
        setPalEggDefaultHatchingTime(e.target.value);
    };

    const handleWorkSpeedRateChange = (e) => {
        setWorkSpeedRate(e.target.value);
    };

    const handlebIsMultiplayChange = (e) => {
        setbIsMultiplay(e.target.value);
    };

    const handlebIsPvPChange = (e) => {
        setbIsPvP(e.target.value);
    };

    const handlebCanPickupOtherGuildDeathPenaltyDropChange = (e) => {
        setbCanPickupOtherGuildDeathPenaltyDrop(e.target.value);
    };

    const handlebEnableNonLoginPenaltyChange = (e) => {
        setbEnableNonLoginPenalty(e.target.value);
    };

    const handlebEnableFastTravelChange = (e) => {
        setbEnableFastTravel(e.target.value);
    };

    const handlebIsStartLocationSelectByMapChange = (e) => {
        setbIsStartLocationSelectByMap(e.target.value);
    };

    const handlebExistPlayerAfterLogoutChange = (e) => {
        setbExistPlayerAfterLogout(e.target.value);
    };

    const handlebEnableDefenseOtherGuildPlayerChange = (e) => {
        setbEnableDefenseOtherGuildPlayer(e.target.value);
    };

    const handleCoopPlayerMaxNumChange = (e) => {
        setCoopPlayerMaxNum(e.target.value);
    };

    const handleServerPlayerMaxNumChange = (e) => {
        setServerPlayerMaxNum(e.target.value);
    };

    const handleServerNameChange = (e) => {
        setServerName(e.target.value);
    };

    const handleServerDescriptionChange = (e) => {
        setServerDescription(e.target.value);
    };

    const handleAdminPasswordChange = (e) => {
        setAdminPassword(e.target.value);
    };

    const handleServerPasswordChange = (e) => {
        setServerPassword(e.target.value);
    };

    const handlePublicPortChange = (e) => {
        setPublicPort(e.target.value);
    };

    const handlePublicIPChange = (e) => {
        setPublicIP(e.target.value);
    };

    const handleRCONEnabledChange = (e) => {
        setRCONEnabled(e.target.value);
    };

    const handleRCONPortChange = (e) => {
        setRCONPort(e.target.value);
    };

    const handleRegionChange = (e) => {
        setRegion(e.target.value);
    };

    const handlebUseAuthChange = (e) => {
        setbUseAuth(e.target.value);
    };

    const handleBanListURLChange = (e) => {
        setBanListURL(e.target.value);
    };

    const handleCasualSettings = () => {
        setDayTimeSpeedRate(1)
        setNightTimeSpeedRate(1)
        setExpRate(2)
        setPalCaptureRate(2)
        setPalSpawnNumRate(1)
        setPalDamageRateAttack(0.5)
        setPalDamageRateDefense(2)
        setPalStomachDecreaseRate(0.5)
        setPalStaminaDecreaseRate(0.5)
        setPalAutoHPRegeneRate(2)
        setPalAutoHpRegeneRateInSleep(2)
        setPlayerDamageRateAttack(2)
        setPlayerDamageRateDefense(0.5)
        setPlayerStomachDecreaseRate(0.3)
        setPlayerStaminaDecreaseRate(0.3)
        setPlayerAutoHPRegeneRate(2)
        setPlayerAutoHpRegeneRateInSleep(2)
        setBuildObjectDamageRate(2)
        setBuildObjectDeteriorationDamageRate(0.2)
        setCollectionDropRate(3)
        setCollectionObjectHpRate(0.5)
        setCollectionObjectRespawnSpeedRate(0.5)
        setEnemyDropItemRate(2)
        setPalEggDefaultHatchingTime(12)
        setbEnableInvaderEnemy(false)
        setDeathPenalty("None")
    }

    const handleRecommendedSettings = () => {
        setDayTimeSpeedRate(1)
        setNightTimeSpeedRate(1)
        setExpRate(1)
        setPalCaptureRate(1.5)
        setPalSpawnNumRate(1)
        setPalDamageRateAttack(1)
        setPalDamageRateDefense(1)
        setPalStomachDecreaseRate(1)
        setPalStaminaDecreaseRate(1)
        setPalAutoHPRegeneRate(1)
        setPalAutoHpRegeneRateInSleep(1)
        setPlayerDamageRateAttack(1)
        setPlayerDamageRateDefense(1)
        setPlayerStomachDecreaseRate(1)
        setPlayerStaminaDecreaseRate(1)
        setPlayerAutoHPRegeneRate(1)
        setPlayerAutoHpRegeneRateInSleep(2)
        setBuildObjectDamageRate(1)
        setBuildObjectDeteriorationDamageRate(1)
        setCollectionDropRate(1)
        setCollectionObjectHpRate(1)
        setCollectionObjectRespawnSpeedRate(1)
        setEnemyDropItemRate(1)
        setPalEggDefaultHatchingTime(24)
        setbEnableInvaderEnemy(true)
        setDeathPenalty("ItemAndEquipment")
    }

    const handleHardSettings = () => {
        setDayTimeSpeedRate(1)
        setNightTimeSpeedRate(1)
        setExpRate(0.5)
        setPalCaptureRate(1)
        setPalSpawnNumRate(1)
        setPalDamageRateAttack(2)
        setPalDamageRateDefense(0.5)
        setPalStomachDecreaseRate(1.5)
        setPalStaminaDecreaseRate(1.5)
        setPalAutoHPRegeneRate(0.5)
        setPalAutoHpRegeneRateInSleep(0.5)
        setPlayerDamageRateAttack(0.75)
        setPlayerDamageRateDefense(2.5)
        setPlayerStomachDecreaseRate(1)
        setPlayerStaminaDecreaseRate(1)
        setPlayerAutoHPRegeneRate(0.6)
        setPlayerAutoHpRegeneRateInSleep(0.6)
        setBuildObjectDamageRate(0.7)
        setBuildObjectDeteriorationDamageRate(1)
        setCollectionDropRate(0.8)
        setCollectionObjectHpRate(1)
        setCollectionObjectRespawnSpeedRate(2)
        setEnemyDropItemRate(0.7)
        setPalEggDefaultHatchingTime(72)
        setbEnableInvaderEnemy(true)
        setDeathPenalty("All")
    }
    const palOptions = {
        sliderOptions: [
            {
                value: PalCaptureRate,
                description: "Adjusts the rate at which Pal creatures can be captured.",
                handler: handlePalCaptureRateChange,
                title: "Pal Capture Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: PalSpawnNumRate,
                description: "Adjusts the rate at which Pal creatures spawn.",
                handler: handlePalSpawnNumRateChange,
                title: "Pal Spawn Number Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: PalDamageRateAttack,
                description: "Refine the damage done by Pal creatures.",
                handler: handlePalDamageRateAttackChange,
                title: "Pal Damage Rate Attack",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: PalDamageRateDefense,
                description: "Refine the damage taken by Pal creatures.",
                handler: handlePalDamageRateDefenseChange,
                title: "Pal Damage Rate Defense",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: PalStomachDecreaseRate,
                description: "Adjusts the rate at which Pal creatures' stomachs decrease.",
                handler: handlePalStomachDecreaseRateChange,
                title: "Pal Stomach Decrease Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: PalStaminaDecreaseRate,
                description: "Adjusts the rate at which Pal creatures decrease their stamina.",
                handler: handlePalStaminaDecreaseRateChange,
                title: "Pal Stamina Decrease Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: PalAutoHPRegeneRate,
                description: "Adjusts the automatic health regeneration rate of Pal creatures.",
                handler: handlePalAutoHPRegeneRateChange,
                title: "Pal Auto HP Regeneration Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: PalAutoHpRegeneRateInSleep,
                description: "Adjusts the automatic health regeneration rate of Pal creatures while sleeping.",
                handler: handlePalAutoHpRegeneRateInSleepChange,
                title: "Pal Auto HP Regeneration Rate In Sleep",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: PalEggDefaultHatchingTime,
                description: "Set the default hatching time for Pal eggs.",
                handler: handlePalEggDefaultHatchingTimeChange,
                title: "Pal Egg Default Hatching Time",
                min: 0,
                max: 72,
                step: 1,
            },
        ]

    }

    const baseOptions = {
        sliderOptions: [
            {
                value: BaseCampMaxNum,
                description: "Defines the maximum number of base camps that can be built.",
                handler: handleBaseCampMaxNumChange,
                title: "Base Camp Max Number",
                min: 0,
                max: 10,
                step: 1,
            },
            {
                value: BaseCampWorkerMaxNum,
                description: "Defines the maximum number of workers in a base camp.",
                handler: handleBaseCampWorkerMaxNumChange,
                title: "Base Camp Worker Max Number",
                min: 0,
                max: 50,
                step: 1,
            },
        ]
    }

    const objectOptions = {
        sliderOptions: [
            {
                value: BuildObjectDamageRate,
                description: "Adjusts the rate at which built objects take damage.",
                handler: handleBuildObjectDamageRateChange,
                title: "Build Object Damage Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: BuildObjectDeteriorationDamageRate,
                description: "Adjusts the rate at which built objects deteriorate.",
                handler: handleBuildObjectDeteriorationDamageRateChange,
                title: "Build Object Deterioration Damage Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: CollectionDropRate,
                description: "Adjusts the drop rate of collected items.",
                handler: handleCollectionDropRateChange,
                title: "Collection Drop Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: CollectionObjectHpRate,
                description: "Adjusts the health of collected objects.",
                handler: handleCollectionObjectHpRateChange,
                title: "Collection Object HP Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: CollectionObjectRespawnSpeedRate,
                description: "Adjusts the speed at which collected objects respawn.",
                handler: handleCollectionObjectRespawnSpeedRateChange,
                title: "Collection Object Respawn Speed Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: EnemyDropItemRate,
                description: "Adjusts the rate at which items are dropped by defeated enemies.",
                handler: handleEnemyDropItemRateChange,
                title: "Enemy Drop Item Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
        ]
    }

    const playerOptions = {
        sliderOptions: [
            {
                value: PlayerDamageRateAttack,
                description: "Refine the damage done by the player.",
                handler: handlePlayerDamageRateAttackChange,
                title: "Player Damage Rate Attack",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: PlayerDamageRateDefense,
                description: "Refine the damage taken by the player.",
                handler: handlePlayerDamageRateDefenseChange,
                title: "Player Damage Rate Defense",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: PlayerStomachDecreaseRate,
                description: "Adjusts the rate of decrease in the player's stomach.",
                handler: handlePlayerStomachDecreaseRateChange,
                title: "Player Stomach Decrease Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: PlayerStaminaDecreaseRate,
                description: "Adjusts the rate at which the player's stamina decreases.",
                handler: handlePlayerStaminaDecreaseRateChange,
                title: "Player Stamina Decrease Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: PlayerAutoHPRegeneRate,
                description: "Adjusts the automatic regeneration rate of the player's health.",
                handler: handlePlayerAutoHPRegeneRateChange,
                title: "Player Auto HP Regeneration Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: PlayerAutoHpRegeneRateInSleep,
                description: "Adjusts the automatic regeneration rate of the player's health while sleeping.",
                handler: handlePlayerAutoHpRegeneRateInSleepChange,
                title: "Player Auto HP Regeneration Rate In Sleep",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
        ]
    }

    const worldOptions = {
        sliderOptions: [
            {
                value: DayTimeSpeedRate,
                description: "Change the speed of game time during the day.",
                handler: handleDayTimeSpeedRateChange,
                title: "Daytime Speed Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: NightTimeSpeedRate,
                description: "Change the speed of the game time during the night.",
                handler: handleNightTimeSpeedRateChange,
                title: "Nighttime Speed Rate",
                min: 0.000000,
                max: 3.000000,
                step: .01,
            },
            {
                value: ExpRate,
                description: "Changes the experience gain rate for players and creatures.",
                handler: handleExpRateChange,
                title: "Experience Rate",
                min: 0.000000,
                max: 10.000000,
                step: .01,
            },
            {
                value: WorkSpeedRate,
                description: "Adjusts the overall speed of work in the game.",
                handler: handleWorkSpeedRateChange,
                title: "Work Speed Rate",
                min: 0.000000,
                max: 10.000000,
                step: .01,
            },
        ],
        dropDownOptions: [
            {
                value: Difficulty,
                description: "Adjusts the overall difficulty of the game. Does nothing.",
                handler: handleDifficultyChange,
                title: "Difficulty",
                options: [0, 1, 2, "None"]
            },
        ]
    }

    const gameplayOptions = {
        dropDownOptions: [
            {
                value: DeathPenalty,
                description: "Defines the penalty in case of player death (e.g., All, None).",
                handler: handleDeathPenaltyChange,
                title: "Death Penalty",
                options: ["None", "Item", "ItemAndEquipment", "All"]
            },
        ],
        checkBoxOptions: [
            {
                value: bEnablePlayerToPlayerDamage,
                description: "Enables or disables player-to-player damage.",
                handler: handlebEnablePlayerToPlayerDamageChange,
                title: "Enable Player to Player Damage"
            },
            {
                value: bEnableFriendlyFire,
                description: "Enables or disables friendly fire.",
                handler: handlebEnableFriendlyFireChange,
                title: "Enable Friendly Fire"
            },
            {
                value: bEnableInvaderEnemy,
                description: "Activates or deactivates invading enemies.",
                handler: handlebEnableInvaderEnemyChange,
                title: "Enable Invader Enemy"
            },
            {
                value: bEnableAimAssistPad,
                description: "Activates or deactivates aim assist for joysticks.",
                handler: handlebEnableAimAssistPadChange,
                title: "Enable Aim Assist Pad"
            },
            {
                value: bEnableAimAssistKeyboard,
                description: "Enables or disables aim assist for keyboards.",
                handler: handlebEnableAimAssistKeyboardChange,
                title: "Enable Aim Assist Keyboard"
            },
            {
                value: bIsMultiplay,
                description: "Activates or deactivates multiplayer mode.",
                handler: handlebIsMultiplayChange,
                title: "Is Multiplay"
            },
            {
                value: bIsPvP,
                description: "Activates or deactivates player versus player (PvP) mode.",
                handler: handlebIsPvPChange,
                title: "Is PvP"
            },
            {
                value: bCanPickupOtherGuildDeathPenaltyDrop,
                description: "Enables or disables the collection of death penalties from other guilds.",
                handler: handlebCanPickupOtherGuildDeathPenaltyDropChange,
                title: "Can Pickup Other Guild Death Penalty Drop"
            },
            {
                value: bEnableFastTravel,
                description: "Enables or disables fast travel.",
                handler: handlebEnableFastTravelChange,
                title: "Enable Fast Travel"
            },
            {
                value: bIsStartLocationSelectByMap,
                description: "Enables or disables the selection of starting locations on the map.",
                handler: handlebIsStartLocationSelectByMapChange,
                title: "Can Select Start Location By Map"
            },
            {
                value: bExistPlayerAfterLogout,
                description: "Enables or disables players' existence after disconnecting.",
                handler: handlebExistPlayerAfterLogoutChange,
                title: "Exist Player After Logout"
            },

        ]
    }

    const guildOptions = {
        sliderOptions: [
            {
                value: AutoResetGuildTimeNoOnlinePlayers,
                description: "Defines the time after which guilds without online players are automatically reset (in hours).",
                handler: handleAutoResetGuildTimeNoOnlinePlayersChange,
                title: "Auto Reset Guild Time No Online Players",
                min: 48.000000,
                max: 730,
                step: 1,
            },
            {
                value: GuildPlayerMaxNum,
                description: "Defines the maximum number of players in a guild.",
                handler: handleGuildPlayerMaxNumChange,
                title: "Guild Player Max Number",
                min: 2,
                max: 32,
                step: 1,
            },
        ],
        checkboxOptions: [
            {
                value: bEnableDefenseOtherGuildPlayer,
                description: "Enables or disables the defense of players in other guilds.",
                handler: handlebEnableDefenseOtherGuildPlayerChange,
                title: "Enable Defense of other Guild Players"
            },
            {
                value: bAutoResetGuildNoOnlinePlayers,
                description: "Automatically resets guilds without online players.",
                handler: handlebAutoResetGuildNoOnlinePlayersChange,
                title: "Auto Reset Guild With No Online Players"
            },
        ]
    }

    const serverOptions = {
        sliderOptions: [
            {
                value: DropItemMaxNum,
                description: "Set the maximum number of items dropped in the game. (Affects Performance",
                handler: handleDropItemMaxNumChange,
                title: "Drop Item Max Number",
                min: 100,
                max: 5000,
                step: 100,
            },
            {
                value: DropItemMaxNum_UNKO,
                description: "Set the maximum number of UNKO objects dropped in the game.  No idea what this does.",
                handler: handleDropItemMaxNum_UNKOChange,
                title: "Drop Item Max Number UNKO",
                min: 10,
                max: 500,
                step: 10,
            },
            {
                value: DropItemAliveMaxHours,
                description: "Set the maximum amount of time that objects remain alive after being dropped.",
                handler: handleDropItemAliveMaxHoursChange,
                title: "Drop Item Alive Max Hours",
                min: .25,
                max: 24,
                step: .25,
            },
            {
                value: CoopPlayerMaxNum,
                description: "Defines the maximum number of cooperative players in a session.",
                handler: handleCoopPlayerMaxNumChange,
                title: "Coop Player Max Number",
                min: 2,
                max: 32,
                step: 1,
            },
            {
                value: ServerPlayerMaxNum,
                description: "Defines the maximum number of players allowed on the server.",
                handler: handleServerPlayerMaxNumChange,
                title: "Server Player Max Number",
                min: 2,
                max: 32,
                step: 1,
            },
        ],
        checkboxOptions: [
            {
                value: bActiveUNKO,
                description: "Activates or deactivates UNKO (Nocturne Unidentified Knock-off).  No idea what this actually does",
                handler: handlebActiveUNKOChange,
                title: "Active UNKO - No idea what this does."
            },
            {
                value: bEnableNonLoginPenalty,
                description: "Activates or deactivates penalties in case of non-connection.",
                handler: handlebEnableNonLoginPenaltyChange,
                title: "Enable the Penalties for Non-Active Players"
            },
            {
                value: bUseAuth,
                description: "Enables or disables server authentication.",
                handler: handlebUseAuthChange,
                title: "Use Authentication"
            },
            {
                value: RCONEnabled,
                description: "Enables or disables the Remote Console (RCON) for server administration.",
                handler: handleRCONEnabledChange,
                title: "RCON Enabled"
            },
        ],
        textBoxOptions: [
            {
                value: ServerName,
                description: "Defines the name of the Palworld server.",
                handler: handleServerNameChange,
                title: "Server Name"
            },
            {
                value: ServerDescription,
                description: "Provides a description for the Palworld server.",
                handler: handleServerDescriptionChange,
                title: "Server Description"
            },
            {
                value: Region,
                description: "Defines the Palworld server region.",
                handler: handleRegionChange,
                title: "Region"
            },
            {
                value: AdminPassword,
                description: "Set the password for server administration.",
                handler: handleAdminPasswordChange,
                title: "Admin Password"
            },
            {
                value: ServerPassword,
                description: "Set the password to join the Palworld server.",
                handler: handleServerPasswordChange,
                title: "Server Password"
            },
            {
                value: PublicPort,
                description: "Define the public port for the Palworld server.",
                handler: handlePublicPortChange,
                title: "Public Port"
            },
            {
                value: PublicIP,
                description: "Defines the public IP address for the Palworld server.",
                handler: handlePublicIPChange,
                title: "Public IP"
            },
            {
                value: RCONPort,
                description: "Defines the port for Remote Console (RCON) communication.",
                handler: handleRCONPortChange,
                title: "RCON Port"
            },
            {
                value: BanListURL,
                description: "Defines the URL for the server's ban list.",
                handler: handleBanListURLChange,
                title: "Ban List URL"
            }
        ]
    }



    return {
        handleCasualSettings,
        handleRecommendedSettings,
        handleHardSettings,
        palOptions,
        baseOptions,
        objectOptions,
        playerOptions,
        worldOptions,
        gameplayOptions,
        guildOptions,
        serverOptions,

    };

    // return (
    //     handleDifficultyChange,
    //         handleDayTimeSpeedRateChange,
    //         handleNightTimeSpeedRateChange,
    //         handleExpRateChange,
    //         handlePalCaptureRateChange,
    //         handlePalSpawnNumRateChange,
    //         handlePalDamageRateAttackChange,
    //         handlePalDamageRateDefenseChange,
    //         handlePlayerDamageRateAttackChange,
    //         handlePlayerDamageRateDefenseChange,
    //         handlePlayerStomachDecreaseRateChange,
    //         handlePlayerStaminaDecreaseRateChange,
    //         handlePlayerAutoHPRegeneRateChange,
    //         handlePlayerAutoHpRegeneRateInSleepChange,
    //         handlePalStomachDecreaseRateChange,
    //         handlePalStaminaDecreaseRateChange,
    //         handlePalAutoHPRegeneRateChange,
    //         handlePalAutoHpRegeneRateInSleepChange,
    //         handleBuildObjectDamageRateChange,
    //         handleBuildObjectDeteriorationDamageRateChange,
    //         handleCollectionDropRateChange,
    //         handleCollectionObjectHpRateChange,
    //         handleCollectionObjectRespawnSpeedRateChange,
    //         handleEnemyDropItemRateChange,
    //         handleDeathPenaltyChange,
    //         handlebEnablePlayerToPlayerDamageChange,
    //         handlebEnableFriendlyFireChange,
    //         handlebEnableInvaderEnemyChange,
    //         handlebActiveUNKOChange,
    //         handlebEnableAimAssistPadChange,
    //         handlebEnableAimAssistKeyboardChange,
    //         handleDropItemMaxNumChange,
    //         handleDropItemMaxNum_UNKOChange,
    //         handleBaseCampMaxNumChange,
    //         handleBaseCampWorkerMaxNumChange,
    //         handleDropItemAliveMaxHoursChange,
    //         handlebAutoResetGuildNoOnlinePlayersChange,
    //         handleAutoResetGuildTimeNoOnlinePlayersChange,
    //         handleGuildPlayerMaxNumChange,
    //         handlePalEggDefaultHatchingTimeChange,
    //         handleWorkSpeedRateChange,
    //         handlebIsMultiplayChange,
    //         handlebIsPvPChange,
    //         handlebCanPickupOtherGuildDeathPenaltyDropChange,
    //         handlebEnableNonLoginPenaltyChange,
    //         handlebEnableFastTravelChange,
    //         handlebIsStartLocationSelectByMapChange,
    //         handlebExistPlayerAfterLogoutChange,
    //         handlebEnableDefenseOtherGuildPlayerChange,
    //         handleCoopPlayerMaxNumChange,
    //         handleServerPlayerMaxNumChange,
    //         handleServerNameChange,
    //         handleServerDescriptionChange,
    //         handleAdminPasswordChange,
    //         handleServerPasswordChange,
    //         handlePublicPortChange,
    //         handlePublicIPChange,
    //         handleRCONEnabledChange,
    //         handleRCONPortChange,
    //         handleRegionChange,
    //         handlebUseAuthChange,
    //         handleBanListURLChange,
    //         Difficulty,
    //         DayTimeSpeedRate,
    //         NightTimeSpeedRate,
    //         ExpRate,
    //         PalCaptureRate,
    //         PalSpawnNumRate,
    //         PalDamageRateAttack,
    //         PalDamageRateDefense,
    //         PlayerDamageRateAttack,
    //         PlayerDamageRateDefense,
    //         PlayerStomachDecreaseRate,
    //         PlayerStaminaDecreaseRate,
    //         PlayerAutoHPRegeneRate,
    //         PlayerAutoHpRegeneRateInSleep,
    //         PalStomachDecreaseRate,
    //         PalStaminaDecreaseRate,
    //         PalAutoHPRegeneRate,
    //         PalAutoHpRegeneRateInSleep,
    //         BuildObjectDamageRate,
    //         BuildObjectDeteriorationDamageRate,
    //         CollectionDropRate,
    //         CollectionObjectHpRate,
    //         CollectionObjectRespawnSpeedRate,
    //         EnemyDropItemRate,
    //         DeathPenalty,
    //         bEnablePlayerToPlayerDamage,
    //         bEnableFriendlyFire,
    //         bEnableInvaderEnemy,
    //         bActiveUNKO,
    //         bEnableAimAssistPad,
    //         bEnableAimAssistKeyboard,
    //         DropItemMaxNum,
    //         DropItemMaxNum_UNKO,
    //         BaseCampMaxNum,
    //         BaseCampWorkerMaxNum,
    //         DropItemAliveMaxHours,
    //         bAutoResetGuildNoOnlinePlayers,
    //         AutoResetGuildTimeNoOnlinePlayers,
    //         GuildPlayerMaxNum,
    //     PalEggDefaultHatchingTime,
    //     WorkSpeedRate,
    //     bIsMultiplay,
    //     bIsPvP,
    //     bCanPickupOtherGuildDeathPenaltyDrop,
    //     bEnableNonLoginPenalty,
    //     bEnableFastTravel,
    //     bIsStartLocationSelectByMap,
    //     bExistPlayerAfterLogout,
    //     bEnableDefenseOtherGuildPlayer,
    //     CoopPlayerMaxNum,
    //     ServerPlayerMaxNum,
    //     ServerName,
    //     ServerDescription,
    //     AdminPassword,
    //     ServerPassword,
    //     PublicPort,
    //     PublicIP,
    //     RCONEnabled,
    //     RCONPort,
    //     Region,
    //     bUseAuth,
    //     BanListURL
    // );
};

export default FormStatesHandlers;