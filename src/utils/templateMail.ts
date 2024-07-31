export const templateMail = (code: number) => `   <div style="
text-align: center;
margin: 0 auto;
max-width: 550px; 
width: 100%;
font-size: 15pt;
font-family: Arial, Helvetica, sans-serif;
color: #000000;
background-color:#fafafa;">
    <table border="0" cellpadding="0" cellspacing="0" style="
        margin:0; 
        padding:0">
        <tr>
            <td>
                <div style="
                    background-color: #f5f5f5;
                    padding: 15px;">
                    <b style="
                        font-size: 18pt;">
                        Подтверждение авторизации
                    </b>
                </div>
            </td>
        </tr>

        <tr>
            <td>
                <div class="themed" style="
                    padding-left: 15px;
                    padding-right: 15px;">
                    <p>
                        Для подтверждения вашего email введите код подтверждения:
                    </p>
                </div>
            </td>
        </tr>

        <tr>
            <td>
                <div style="padding-bottom: 20px;">
                    <b id="code-place" style="
                    font-size:32pt; 
                    color: #1d60d1;
                    padding-left: 15px;
                    padding-right: 15px;">
                        ${code}
                    </b>
                </div>
            </td>
        </tr>

        <tr>
            <td>
                <div class="themed" style="
                padding-left: 15px;
                padding-right: 15px;">
                    <p>
                        Срок действия кода истекает через 5 минут.
                    </p>    
                </div>
            </td>
        </tr>

        <tr>
            <td>
                <div style="
                    padding-top: 30px;
                    padding-bottom: 10px;
                    padding-left: 15px;
                    padding-right: 15px;">
                    <i style="
                        color: #d4d4d4; 
                        font-size:10pt">
                        Это письмо сформировано автоматически.<br/>  
                        Пожалуйста, не отвечайте на него.
                    </i>
                </div>
            </td>
        </tr>

    </table>
</div>`;


