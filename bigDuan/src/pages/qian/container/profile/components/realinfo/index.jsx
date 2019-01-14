import { Button } from 'zzc-design-mobile';
import './index.scss';

export default function RealInfo({
    realname,
    idNumber,
    bankCard,
    handleSubmit,
    saveToState
}) {
    return (
        <div className="realinfo">
            <div className="realinfo-mn">
                <div className="step-item">
                    <span>姓名</span>
                    <input
                        type="text"
                        value={realname}
                        placeholder=""
                        name="realname"
                        onChange={saveToState}
                    />
                </div>
                <div className="step-item">
                    <span>身份证号</span>
                    <input
                        type="text"
                        value={idNumber}
                        placeholder=""
                        name="idNumber"
                        onChange={saveToState}
                    />
                </div>
                <div className="step-item">
                    <span>银行卡号</span>
                    <input
                        type="text"
                        value={bankCard}
                        placeholder=""
                        name="bankCard"
                        onChange={saveToState}
                    />
                </div>
                <div className="submit-box has-bottombar">
                    <Button type='main' size='lg' style={{ borderRadius: '0.16rem' }} onClick={handleSubmit}> 保存</Button>
                </div>
                {/* <div className="btn-confirm active" >
					保存
				</div> */}
            </div>
        </div>
    );
}
