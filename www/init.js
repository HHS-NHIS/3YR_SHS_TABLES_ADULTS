var isPivot = false; var initCols = [
                      { title: "Year", className: "sub", "visible": false},
                      { title: "row_var", className: "sub", "visible": false},
                      { title: "rowLevels" , className: "main"},
                      { title: "rowLevNum" , className: "sub", "visible": false},
                      { title: "selected",   className: "sub", "visible" : false},
                      
                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay}]; var initLevels = {"ai_res":{"ai_resA":"AIAN inside AIAN area","ai_resB":"Not AIAN inside AIAN area","ai_resC":"AIAN outside AIAN area","ai_resD":"Not AIAN outside AIAN area"},"asiandet":{"asiandetA":"Asian Indian","asiandetB":"Chinese","asiandetC":"Filipino","asiandetD":"Japanese","asiandetE":"Korean","asiandetF":"Vietnamese","asiandetG":"Other Asian"},"hisp":{"hispA":"Hispanic or Latino origin","hispB":"Not Hispanic or Latino origin"},"hispasian":{"hispasianA":"Hispanic Asian","hispasianB":"Asian Indian, non-Hispanic","hispasianC":"Chinese, non-Hispanic","hispasianD":"Filipino, non-Hispanic","hispasianE":"Japanese, non-Hispanic","hispasianF":"Korean, non-Hispanic","hispasianG":"Vietnamese, non-Hispanic","hispasianH":"Other Asian, non-Hispanic"},"hispdet":{"hispdetA":"Central American","hispdetB":"Cuban","hispdetC":"Dominican","hispdetD":"Mexican or Mexican American","hispdetE":"Puerto Rican","hispdetF":"South American","hispdetG":"Other Hispanic, Latino, or Spanish"},"hisprace":{"hispraceA":"Hispanic, any race","hispraceB":"AIAN only, non-Hispanic","hispraceC":"Asian only, non-Hispanic","hispraceD":"Black only, non-Hispanic","hispraceE":"NHPI only, non-Hispanic","hispraceF":"White only, non-Hispanic","hispraceG":"AIAN and White, non-Hispanic","hispraceH":"Black and White, non-Hispanic"},"race":{"raceA":"AIAN, single race","raceB":"Asian, single race","raceC":"Black, single race","raceD":"NHPI, single race","raceE":"White, single race"},"racethree":{"racethreeA":"AIAN, single or multiple races","racethreeB":"Asian, single or multiple races","racethreeC":"Black, single or multiple races","racethreeD":"NHPI, single or multiple races","racethreeE":"White, single or multiple races"},"racetwo":{"racetwoA":"AIAN and White","racetwoB":"Black and White"},"res":{"resA":"Inside AIAN area","resB":"Outside AIAN area"}}; var subLevels = ["Physician office visits","Non-physician office visits","Physician hosp. visits","Non-physician hosp. visits"];
