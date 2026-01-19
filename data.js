const quizData = [
  {
    id: 1,
    category: "試用期 / Probation",
    question: "在試用期內的首個月，僱主或僱員終止合約需要多少通知期？\nWhat is the required notice period for termination during the first month of probation?",
    options: [
      "7 天 / 7 days",
      "1 個月 / 1 month",
      "無需通知 / No notice required",
      "14 天 / 14 days"
    ],
    correctIndex: 2,
    explanation: "✅ 正確 (Correct)。\n根據《僱傭條例》，在試用期內的首個月，雙方可隨時終止合約，無需給予通知或代通知金。\nUnder the EO, within the first month of probation, either party may terminate the contract without notice or payment in lieu."
  },
  {
    id: 2,
    category: "連續性合約 / 418 Rule",
    question: "「連續性合約」(俗稱 418) 的定義是什麼？\nWhat is the definition of a 'Continuous Contract' (418 Rule)?",
    options: [
      "連續 4 星期，每週工作 ≥18 小時 / 4 consecutive weeks, ≥18 hrs/week",
      "連續 4 個月，每月工作 ≥18 小時 / 4 consecutive months, ≥18 hrs/month",
      "連續 4 星期，每週工作 ≥40 小時 / 4 consecutive weeks, ≥40 hrs/week",
      "任何全職工作 / Any full-time job"
    ],
    correctIndex: 0,
    explanation: "✅ 正確 (Correct)。\n僱員如連續受僱於同一僱主 4 星期或以上，而每星期工作 18 小時或以上，即屬連續性合約。\nAn employee who has been employed continuously by the same employer for 4 weeks or more, with at least 18 hours worked in each week."
  },
  {
    id: 3,
    category: "工資支付 / Wage Payment",
    question: "僱主必須在工資期屆滿後多久內支付工資？\nWhen must wages be paid after the end of the wage period?",
    options: [
      "14 天內 / Within 14 days",
      "7 天內 / Within 7 days",
      "1 個月內 / Within 1 month",
      "下個工作日 / Next working day"
    ],
    correctIndex: 1,
    explanation: "✅ 正確 (Correct)。\n僱主必須在工資期屆滿後 7 天內支付工資。違例屬刑事罪行。\nWages must be paid within 7 days after the end of the wage period. Failure to do so is a criminal offence."
  },
  {
    id: 4,
    category: "休息日 / Rest Days",
    question: "受僱於連續性合約的僱員，每 7 天可享有多少天休息日？\nHow many rest days is an employee under a continuous contract entitled to every 7 days?",
    options: [
      "1 天 / 1 day",
      "2 天 / 2 days",
      "視乎合約 / Depends on contract",
      "無規定 / No regulation"
    ],
    correctIndex: 0,
    explanation: "✅ 正確 (Correct)。\n僱員每 7 天期間須獲給予不少於 1 個休息日。\nAn employee is entitled to not less than 1 rest day in every period of 7 days."
  },
  {
    id: 5,
    category: "法定假日 / Statutory Holidays",
    question: "僱員需受僱滿多久，才可享有「有薪」法定假日？\nHow long must an employee be employed to qualify for 'Paid' Statutory Holidays?",
    options: [
      "1 個月 / 1 month",
      "418 規則 / 418 Rule applies",
      "3 個月 / 3 months",
      "12 個月 / 12 months"
    ],
    correctIndex: 2,
    explanation: "✅ 正確 (Correct)。\n僱員如在緊接法定假日之前已按連續性合約受僱滿 3 個月，便可享有該假日薪酬。\nAn employee is entitled to holiday pay if they have been employed under a continuous contract for 3 months immediately preceding the statutory holiday."
  },
  {
    id: 6,
    category: "有薪年假 / Annual Leave",
    question: "受僱滿 1 年的僱員，最少可享有多少天有薪年假？\nWhat is the minimum paid annual leave for an employee who has served for 1 year?",
    options: [
      "5 天 / 5 days",
      "7 天 / 7 days",
      "10 天 / 10 days",
      "14 天 / 14 days"
    ],
    correctIndex: 1,
    explanation: "✅ 正確 (Correct)。\n根據法例，受僱滿 1 年可享 7 天有薪年假，之後會隨年資增加至最高 14 天。\n7 days for the first year, increasing progressively to a maximum of 14 days according to length of service."
  },
  {
    id: 7,
    category: "疾病津貼 / Sickness Allowance",
    question: "領取疾病津貼（4/5薪）的病假最少需要連續多少天？\nWhat is the minimum number of consecutive sick leave days required to claim Sickness Allowance (4/5 pay)?",
    options: [
      "1 天 / 1 day",
      "2 天 / 2 days",
      "3 天 / 3 days",
      "4 天 / 4 days"
    ],
    correctIndex: 3,
    explanation: "✅ 正確 (Correct)。\n病假需連續 4 天或以上，並有醫生證明書，方可領取疾病津貼。\nSick leave must be taken for 4 consecutive days or more and supported by a medical certificate."
  },
  {
    id: 8,
    category: "疾病津貼 / Sickness Allowance",
    question: "疾病津貼的每日款額是僱員平均日工資的多少？\nWhat is the rate of Sickness Allowance relative to the employee's average daily wages?",
    options: [
      "50%",
      "66.6%",
      "80%",
      "100%"
    ],
    correctIndex: 2,
    explanation: "✅ 正確 (Correct)。\n疾病津貼額為每日平均工資的五分之四 (80%)。\nThe daily rate of sickness allowance is a sum equivalent to four-fifths (80%) of the average daily wages."
  },
  {
    id: 9,
    category: "產假 / Maternity Leave",
    question: "現行法例規定的有薪產假為多少個星期？\nWhat is the duration of paid Maternity Leave under current law?",
    options: [
      "10 星期 / 10 weeks",
      "12 星期 / 12 weeks",
      "14 星期 / 14 weeks",
      "16 星期 / 16 weeks"
    ],
    correctIndex: 2,
    explanation: "✅ 正確 (Correct)。\n法定產假已由 10 星期延長至 14 星期。\nThe statutory maternity leave has been extended to 14 weeks."
  },
  {
    id: 10,
    category: "侍產假 / Paternity Leave",
    question: "合資格的男性僱員可享有多少天侍產假？\nHow many days of Paternity Leave is an eligible male employee entitled to?",
    options: [
      "3 天 / 3 days",
      "5 天 / 5 days",
      "7 天 / 7 days",
      "14 天 / 14 days"
    ],
    correctIndex: 1,
    explanation: "✅ 正確 (Correct)。\n合資格的男性僱員可享有 5 天侍產假。\nEligible male employees are entitled to 5 days of paternity leave."
  },
  {
    id: 11,
    category: "終止合約 / Termination",
    question: "如僱主即時解僱員工（無通知期），通常需要支付什麼？\nIf an employer dismisses an employee immediately (without notice), what must usually be paid?",
    options: [
      "遣散費 / Severance Payment",
      "代通知金 / Payment in lieu of notice",
      "雙糧 / Double Pay",
      "花紅 / Bonus"
    ],
    correctIndex: 1,
    explanation: "✅ 正確 (Correct)。\n如無給予通知期，必須支付相等於通知期工資的「代通知金」。\nPayment in lieu of notice must be paid if the required notice period is not given."
  },
  {
    id: 12,
    category: "遣散費 / Severance Payment",
    question: "僱員需受僱滿多久，在被裁員時才符合資格領取遣散費？\nHow long must an employee be employed to qualify for Severance Payment upon redundancy?",
    options: [
      "12 個月 / 12 months",
      "24 個月 / 24 months",
      "5 年 / 5 years",
      "7 年 / 7 years"
    ],
    correctIndex: 1,
    explanation: "✅ 正確 (Correct)。\n僱員需按連續性合約受僱不少於 24 個月（2年）。\nThe employee must have been employed under a continuous contract for not less than 24 months."
  },
  {
    id: 13,
    category: "長期服務金 / Long Service Payment",
    question: "僱員需受僱滿多久，才符合資格領取長期服務金？\nHow long must an employee be employed to qualify for Long Service Payment?",
    options: [
      "2 年 / 2 years",
      "3 年 / 3 years",
      "5 年 / 5 years",
      "10 年 / 10 years"
    ],
    correctIndex: 2,
    explanation: "✅ 正確 (Correct)。\n僱員需按連續性合約受僱不少於 5 年。\nThe employee must have been employed under a continuous contract for not less than 5 years."
  },
  {
    id: 14,
    category: "扣薪 / Deduction of Wages",
    question: "僱員因疏忽損壞僱主財物，僱主最高可扣除多少工資？\nWhat is the maximum deduction for damage to goods due to employee's negligence?",
    options: [
      "實際價值 / Actual value",
      "HK$300",
      "HK$500",
      "HK$1000"
    ],
    correctIndex: 1,
    explanation: "✅ 正確 (Correct)。\n每次損壞最高只可扣除 HK$300，且不得超過該工資期工資的四分之一。\nMaximum HK$300 per case, and total deductions must not exceed 1/4 of the wages payable in that wage period."
  },
  {
    id: 15,
    category: "僱傭保障 / Employment Protection",
    question: "解僱懷孕僱員（除嚴重過失外）是否違法？\nIs it illegal to dismiss a pregnant employee (except for serious misconduct)?",
    options: [
      "合法 / Legal",
      "視乎合約 / Depends on contract",
      "違法，屬刑事罪行 / Illegal, Criminal Offence",
      "只需賠錢即可 / Legal if paid"
    ],
    correctIndex: 2,
    explanation: "✅ 正確 (Correct)。\n解僱已證實懷孕的僱員即屬違法，僱主可被檢控，最高罰款 10 萬元。\nIt is an offence to dismiss a pregnant employee. The employer is liable to prosecution and a maximum fine of $100,000."
  },
  {
    id: 16,
    category: "颱風安排 / Typhoon Arrangements",
    question: "如八號風球懸掛導致無法上班，僱主可否扣除僱員的年假？\nCan an employer deduct annual leave if an employee cannot work due to Typhoon Signal No. 8?",
    options: [
      "可以 / Yes",
      "不可以 / No",
      "視乎公司大小 / Depends on company size",
      "由勞工處決定 / Decided by Labour Dept"
    ],
    correctIndex: 1,
    explanation: "✅ 正確 (Correct)。\n根據《僱傭條例》，僱主不得強迫僱員以年假抵銷颱風期間的缺勤。\nEmployers cannot compel employees to use their annual leave to cover absence during typhoons."
  },
  {
    id: 17,
    category: "年假薪酬 / Annual Leave Pay",
    question: "僱員受僱滿 3 個月但不足 12 個月辭職，是否有權獲得按比例年假薪酬？\nIs an employee entitled to pro-rata annual leave pay if they resign after 3 months but less than 12 months?",
    options: [
      "沒有 / No",
      "有 / Yes",
      "只有被解僱才有 / Only if dismissed",
      "只有做滿半年才有 / Only after 6 months"
    ],
    correctIndex: 1,
    explanation: "✅ 正確 (Correct)。\n只要受僱滿 3 個月，終止合約時（除即時解僱外）均可獲按比例年假薪酬。\nAn employee is entitled to pro-rata annual leave pay upon termination if employed for at least 3 months (unless summarily dismissed)."
  },
  {
    id: 18,
    category: "年終酬金 / End of Year Payment",
    question: "「雙糧」（年終酬金）是否《僱傭條例》強制規定的？\nIs 'Double Pay' (End of Year Payment) mandatory under the Employment Ordinance?",
    options: [
      "是，所有公司都要發 / Yes, mandatory for all",
      "否，視乎僱傭合約 / No, depends on contract",
      "是，但只限大公司 / Yes, for big companies only",
      "否，已被花紅取代 / No, replaced by bonus"
    ],
    correctIndex: 1,
    explanation: "✅ 正確 (Correct)。\n年終酬金並非強制性，需視乎僱傭合約內是否有訂明。\nEnd of year payment is not mandatory unless specified in the employment contract."
  },
  {
    id: 19,
    category: "即時解僱 / Summary Dismissal",
    question: "以下哪項是僱主可以「即時解僱」且不賠償的理由？\nWhich of the following is a valid ground for 'Summary Dismissal' without compensation?",
    options: [
      "經常遲到 / Frequent lateness",
      "懷孕 / Pregnancy",
      "參加工會活動 / Trade union activities",
      "嚴重行爲不當 / Serious misconduct"
    ],
    correctIndex: 3,
    explanation: "✅ 正確 (Correct)。\n僱員如犯下嚴重行爲不當（如欺詐、嚴重疏忽），僱主可即時解僱而無需給予通知或代通知金。\nAn employer may summarily dismiss an employee without notice or payment in lieu for serious misconduct (e.g., fraud, gross negligence)."
  },
  {
    id: 20,
    category: "記錄保存 / Record Keeping",
    question: "僱主須保存僱員的工資及僱傭紀錄最少多久？\nHow long must an employer keep wage and employment records?",
    options: [
      "3 個月 / 3 months",
      "6 個月 / 6 months",
      "12 個月 / 12 months",
      "7 年 / 7 years"
    ],
    correctIndex: 1,
    explanation: "✅ 正確 (Correct)。\n僱主必須保存僱員過去 6 個月的工資及僱傭紀錄。\nEmployers must keep wage and employment records covering the preceding 6 months."
  },
  {
    id: 21,
    category: "判斷題 / True or False",
    question: "【判斷題】僱主在任何情況下都不能解僱懷孕僱員，否則即屬違法。\n[True/False] An employer cannot dismiss a pregnant employee under any circumstances; otherwise, it is illegal.",
    options: [
      "正確 / True",
      "錯誤 / False"
    ],
    correctIndex: 1,
    explanation: "✅ 錯誤 (False)。\n雖然法律極力保障懷孕僱員，但如果僱員犯下嚴重過失（如欺詐、嚴重疏忽），僱主仍有權根據《僱傭條例》第 9 條將其即時解僱。\nAlthough the law protects pregnant employees, an employer may still summarily dismiss her under Section 9 of the EO if she commits serious misconduct (e.g., fraud, gross negligence)."
  },
  {
    id: 22,
    category: "計算題 / Calculation",
    question: "【計算題】員工月薪 HK$15,000，他在 4 月份（30天）工作了 10 天後辭職。請計算他應得的工資。\n[Calculation] Monthly salary HK$15,000. The employee resigned after working 10 days in April (30 days). Calculate the wages payable.",
    options: [
      "HK$4,838.70",
      "HK$5,000.00",
      "HK$7,500.00",
      "HK$15,000.00"
    ],
    correctIndex: 1,
    explanation: "✅ HK$5,000.00。\n計算公式：月薪 ÷ 當月日數 × 工作天數\nFormula: Monthly Rate ÷ Days in the month × Days worked\nHK$15,000 ÷ 30 × 10 = HK$5,000。"
  },
  {
    id: 23,
    category: "邏輯分析 / Logical Analysis",
    question: "以下哪些屬於《僱傭條例》規定的法定權益？\nWhich of the following are statutory rights under the Employment Ordinance?\n1. 休息日 (Rest Day)\n2. 雙糧 (Double Pay)\n3. 有薪年假 (Annual Leave)",
    options: [
      "只有 1 & 2 / 1 & 2 only",
      "只有 1 & 3 / 1 & 3 only",
      "只有 2 & 3 / 2 & 3 only",
      "以上全部皆是 / All of the above"
    ],
    correctIndex: 1,
    explanation: "✅ 只有 1 & 3 (1 & 3 only)。\n解析：「雙糧」（年終酬金）並非強制性的法定權益，而是視乎僱傭合約而定。休息日和年假則是法例規定的。\nExplanation: 'Double Pay' (End of Year Payment) is NOT mandatory unless specified in the contract. Rest days and Annual Leave are statutory requirements."
  }
];
