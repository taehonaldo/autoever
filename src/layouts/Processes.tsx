import styled from "styled-components";
import process1Icon from "../assets/icons/ic_process01.svg";
import process2Icon from "../assets/icons/ic_process02.svg";
import process3Icon from "../assets/icons/ic_process03.svg";
import process4Icon from "../assets/icons/ic_process04.svg";
import stepArrowIcon from "../assets/icons/ic_step_arrow.svg";
import { columnBox } from "../styles/common.styled";

const Processes = () => {
  const steps = [
    {
      icon: process1Icon,
      title: "문의 등록",
      description:
        "상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.",
    },
    {
      icon: process2Icon,
      title: "관리자 설정",
      description: "관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.",
    },
    {
      icon: process3Icon,
      title: "임직원 가입",
      description: "사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.",
    },
    {
      icon: process4Icon,
      title: "서비스 이용",
      description:
        "사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!",
    },
  ];

  return (
    <ProcessesContainer>
      {steps.map((step, index) => (
        <StepWrapper key={index}>
          <Step>
            <StepIcon src={step.icon} alt={`${step.title} Icon`} />
            <StepContent>
              <StepTitle>
                {index + 1}. {step.title}
                {index < steps.length - 1 && (
                  <StepArrow
                    src={stepArrowIcon}
                    alt="Step Arrow"
                    aria-hidden="true"
                  />
                )}
              </StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepContent>
          </Step>
        </StepWrapper>
      ))}
    </ProcessesContainer>
  );
};

const ProcessesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: calc(var(--space-md) + 12px);

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: calc(var(--space-md));
    align-items: flex-start;
  }
`;

const StepWrapper = styled.div`
  ${columnBox}
  text-align: left;

  @media (max-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StepIcon = styled.img`
  width: var(--ic-xlg);
  height: var(--ic-xlg);
  margin-bottom: 0.5rem;

  @media (max-width: 1024px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StepTitle = styled.div`
  position: relative;
  font-weight: bold;
  color: var(--midnight-900);
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.div`
  color: var(--gray-500);
`;

const StepArrow = styled.img`
  position: absolute;
  right: calc(((var(--space-md) + 6px) * -1));
  width: 24px;
  height: 24px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export default Processes;
