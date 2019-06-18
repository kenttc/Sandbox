
        function Calculate() {
            var salaryType = document.getElementById('salarytype');
            var salaryTypeSelected = salaryType.options[salaryType.selectedIndex].value;

            var hoursWorked = parseInt(document.getElementById('hoursWorked').value);
            var spend = parseInt(document.getElementById('spend').value)
            var daysInWeek = 5;
            var fourWeeks = 4;
            var perYear = 12;
            var salary = parseInt(document.getElementById('salary').value);
            var moneyEarnedPerHour = 0;

            switch (salaryTypeSelected) {
                case "weekly":
                    moneyEarnedPerHour = salary / (hoursWorked * daysInWeek)
                    break;
                case "fourweekly":
                    moneyEarnedPerHour = salary / (hoursWorked * daysInWeek * fourWeeks)
                    break;
                case "monthly":
                    moneyEarnedPerHour = (salary * perYear / fourWeeks) / (hoursWorked * daysInWeek * fourWeeks)
                    break;
            }
            var moneyEarnedPerMin = moneyEarnedPerHour/60;
            var hoursNeedToWorkFor = parseInt(Math.ceil(spend / moneyEarnedPerHour));
            var minsNeedToWorkFor =  parseInt(Math.ceil(spend / moneyEarnedPerMin));
            var daysNeedToWorkFor =  parseInt(Math.ceil((spend / moneyEarnedPerHour)/hoursWorked));


            Print("hoursNeedToWorkFor",hoursNeedToWorkFor);
            Print("spendvalue", spend);
            Print("per-min", moneyEarnedPerMin.toFixed(2));
            Print("per-hour", moneyEarnedPerHour.toFixed(2));
            
            Print("need-per-min", minsNeedToWorkFor);
            Print("need-per-hour", hoursNeedToWorkFor);
            Print("need-per-hour", daysNeedToWorkFor);

            document.getElementById("result").style = "display:inline";
        }

        function Print(elementName, textValue) {
            var elements = document.getElementsByClassName(elementName);
            for (var i = 0; i < elements.length; i++) {
                elements[i].innerHTML = textValue;
            }
        }

        function Redo(){
            document.getElementById("spend").value="";
            document.getElementById("spend").focus();
        }

   