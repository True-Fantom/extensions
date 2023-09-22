// Name: YaGames
// ID: truefantomyagames
// Description: Blocks that allow games to interact with the YaGames SDK. Unofficial.
// By: TrueFantom <https://scratch.mit.edu/users/TrueFantom/>

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("YaGames Extension must be run Unsandboxed!");
  }

  const icon_uri =
    "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5Ni41MzE1IiBoZWlnaHQ9Ijk3IiB2aWV3Qm94PSIwLDAsOTYuNTMxNSw5NyI+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwLTEiPjxwYXRoIGQ9Ik0xOTEuNzM0MjUsMTgwYzAsLTI2LjY1NjQzIDIxLjYwOTMxLC00OC41IDQ4LjI2NTc1LC00OC41YzI2LjY1NjQ0LDAgNDguMjY1NzUsMjEuODQzNTcgNDguMjY1NzUsNDguNWMwLDI2LjY1NjQ0IC0yMS42MDkzMSw0OC41IC00OC4yNjU3NSw0OC41Yy0yNi42NTY0MywwIC00OC4yNjU3NSwtMjEuODQzNTYgLTQ4LjI2NTc1LC00OC41eiIgZmlsbD0ibm9uZSIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTEuNzM0MjUsLTEzMS41KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtMSkiPjxnIGZpbGw9IiMwMDAwMDAiPjxnPjxpbWFnZSB4PSIxMDEwLjc3ODEzIiB5PSI2OTQuMDkzNjkiIHRyYW5zZm9ybT0ic2NhbGUoMC4xODk0NiwwLjE4OTQ2KSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSUFBQUFDQUNBSUFBQUJNWFBhY0FBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUM5elNVUkJWSGhlN1gwSnVCMVZsZTZwTTk4NU43bVpBeGtZQWdGSkFpUUVoSVJSQmtrUUdSUnRVQUZCRUZUc2ZnN2RQQWUwNlg0NEQrK3o2VlpiL2NTcFFSQUZaSkFBR3NhRU1TTWg4M2lUT3c5blBxZmUrdGRhZTlldXV2Y0cyN1pmbThTVmZWYjkvMXByNzZxOWR0V3U0ZFM1OFpaTWZpejJWL21mazdndS95ci9RL0xYQVJoVy9EY3JFaVBhV3Y0VStlc0FXTEdwdE5sMExWUnFmcXhtc2RFU0p0b3RmNno4ZFFEY2xBbWd0RktwU3NaOXYycEtMV2F3QWc1alRjVnRoeVJDUjVTRDh5VHM1a1V3dEk5L05tc0tNdG5hcU5IbHhxWnFLbE5MSnYxeXlTc1c0Z1A5eWQ3dVpMa2t1NjluQ2luUEUyQXRnVVNveWtFMUFKSlpFYzB5a2s1RjgrN0g0LzcwSS9OSHp4NDgvT2o4cEVOS2t3NHROcmRVeE1YeHRMVFlwekhZdWlHN2RWTjI0N3I2TmE4MTd0aFM1L3VTZHhvWURBUVBoaFFyTG9ZY1BBTmdNcWlBNWhab3BuNTlZK1draGYwbkxlcWJQVytnb1lrbUh4SWVHdll5WTIwcG9NV3NmYisvTC9IY1U2M1AvNzcxeFdkSGxVb0p6blhjSEJPU2Q1djlZQmdPaGdFd0tUUHB3MndPVVBNOGY4NUovV2N2NmFIVXA5Tms1QmdPVVJ5bHBCeFhpQnJ0KzZXUzkvaURZeC85OWZqMWE1ck0wUkRuWVNDeGcwRUNjR0FQZ09TRmhBQUtDWU5hSWxFOTg4S2VDeS92bW41a3dZVEpSTVJBTkpiMFlScE50SGdOeHRLQWdNWmVYZEg4cTU5TldmN01hTituWVpDamdjY0Rvc053QUErQXBJTUVxWEgyK3RvWkYvUmMrdjY5VTZZVjFZdEFDVVprbUpKeVhBS3d0Tmg2alhaSEFrdC8xY3ZOUC92QjFGZVdqK2FqZ1laQmpnWXBCK1lBU1A5SmtBdWtBVW1oQWFoT1B5Si96Y2QzSDNmaW9NYTQ2UXZ3RUZkZ0NSdXh0SGhZVitEOS9lUGpmdkNkdy9idXJwZGh3TUhBWTNEZ0RZRDBtUVQ5NXgwZkpabXFYbmxEKzVMM2RDWVM0Y1JSQ1ZGU2JMU1VOSmFPVWFsZ0E2d09MRkZhclhyLyt2VWpmdnVyUTN5ZlR0RTBCcGlPRWpPYnIrS0lBME9rdHlSMER5WFp3WTQvWVhMeDc3KzBkZUc1dlhUd1N5NDRacCtaalZKU2ppdEVqWWJGVVBXU3NCSE1qM3YrdkpNN0RwMDI4T3FMbzBwRkdnUElnVFFBdHMrU2ZkbjNxeWN0NnYzczE3ZE9QdFRNK0ZDY2xCQVZiQUNXRmxzdjYwaG1zUlRnVWl4VVIyZ3NSZ093OEt4ZHI3MDBxcWNyVGZTQUdRRGJReTQrSGlSUTlpLyttNzAzL2NQT1RIYTRTM3VsREVJV1EvZWR5aWdWTEpTV0ZqTUF0RFRXMEZnK2IvRzI5V3ViZCsyb1B3QUdRRG9tUXYybWY1TDl5cnMvMkg3VmpYdHd0b014NkQ4dkNUZ0ZabnhVaDlJblZQQytLV3NzalN1Z29obHdQTjJDbkg3T2pqMjdNd2ZBU1ZpNlIwSTN0NFRsSVZybGlnKzJ2K2VEZThMOWw4NUhxT0I5VTlaWUdwZm9mY1FEajB4Sll3a2puWWozYTVIK2tGRDJNZWR3cVZ6MnZ2YjNYTnZPM1NZaitnbXNad1UyS3BXQUNMWEJsbktBUkZvNlVueUFuZXFXaWxkYmczRy9IZ0RxZ0lnOHFVZnhZOVd6Rm5kYythRjI3VE02TENuZ0RpczEvWmRjZ0VvSnAwOWM2aldSSVdyam5kWUVCL0ZoQ213cDZkcitmZ1NRQkZlY05QTWNkV3ovRFovWTZjVk5ENlczdHNNaGFuS0I2dGJpVU1FMjNsS05sR0tvV29RNjhWRnFxNnQzL3gwQTZvTm83aFZQUGcyTnhiKzdiV3M2VlIydXd5WXlvSVNGY2lRb3UveGFvVmhkdTJuZytaVzlhellPRkFwRFdndXdRMjMxRUJVY29jYklkRDg5Q1ZNSFJNdTlMdVo5MzYvYzh0bXRaMTdRdzMyekFVWUhsbjNSRGR2eVAzbXdmZGxMdmFVeU5RdnhZdjdwODBlOTYyMXRSMDdOc29FYVp5MDRYSDBJSGVJaWphWEYvbjU5R1dxZk5GUnA2ai85dk03M1hrZVhQYmFySkl4REhUWkdvWUVGK2tmMzc3Nzl1MXMyYnM5WGNUMGxSdmcyN2NqLytzbXVWTkk3N29nNll5T2x0WXlPTkU1THdjWVNiSmlsV095UEEyQzdRVVd6WDk5UXZQVkxXK3JxNkZCZ1Y2aTNESVpKQnhhcS9SanQrTisvYnpjU0x6WVJoNzI0ZXNDTHgrYk1yQTgzanBnQW95bExoL05DR1Jmci9mUWNnRDdZM1QvbVZ5Njljcy9vTVNYWXlhZzlwRUplem9pMWlCY1ZRNWJYMXZkLzc5NWRvZXd6TVV6eDkrL2JzL0tOUVRPSkQ1blcwWlJMdVlTOEVoK2krOTBBVUg5RVMwL3cxc0s0aWZtTDM3TjNueDNtb2w0dTRvSVg4WGM5MEY2amF5aDJxY2hxVkFMODR3ZGtSZEthVmxlTHR1eFN3VU1wUjNMMS9mRUl3TmFUVUFkbzhxRWo0SjN2M1pOTUVwQWVodnRQT3VpelVBNEFWdHJUVjM1K1pUK25sejI4Q3BFaE9MYnM1ZjZ1dmpJcVJsdGpEV3pLa0JXRkk1bnViMGNBYlRvMHA0TTd4cnYvdVVzNm5SNmFUcUo3YkF4WmJQOU5RTXhmdnlYSHU3OXBHdUl5RjRPOHZqbXZkVU90eWRwSm16SmtSZUZJTGZ2ZkZFUTlRRS9NN24vdWtvNWswdWt3YWUwd1lnS3FBUXpVeTlyMyszTjQ4Y1RtMStJd0F4TGMwMC94dGpVdXVxSlFaa011ckNpNlhySHNoK2NBN1dSdDRzVCtEMXk5YXNubGU1aWEvcFBXSGxvcVJRS2kvU2VjU2ZHU0hDcThIa3NEakpva0RYVjBieEJVNTVhWndxK1lEcW05M2VYMnpuS2x3aXRGcEExMktzWnErOUdOR1BwQW01K0lsK2N2MkhIbVdadG16OTRWVDZmU28wZHhmeVNBZFpRS0hwRjI5cFl2L3ZqclRFVk0xaUhENEh2dW1EWmhESCtmRlZrUnQvYlN1dnpkai9jOXV6SS9tS2NVeHp3dk51L283T0xUR3M0NnNZNi9qNU5JMWx4OWZ4cUE4Uk1HM243UkcyOWR1RzFVODJDdFVxMlZLNmxSTFltNmpIaTVYNXdGb1ZBV1I2amdnRjcveFUxck5oVkdTcnpMamowc2UrZmZUMFl0V09nakRsQzZlZjdLWFoyL2VxcWZMUkNuRVgvK3JPeXRIMmdkUHpvUnFiZ2YzSWdsRXY0SkorMSsvM1Vyci92d3kwY2UzWkhObEh5NlZhVlNxNlZibS9GcWdmYlQ5Q3FnckxFMHJvQWFqV0MvcFRIeHUrZjcxQ2doTEVPSDRhUHZIak45WWtvb3g2RTZMU3BWLzlidjdIbjRPYnh2TWFRU1pNZmV5aE1yOG0rYlgxY3ZUelJNOWIvb0FSalRsci9rM2E5LytPTXZYYkJrNCtRcC9SNnUrdVdGNVpwZnFjWFR5U1I2WTd0TFhSSk0ybWFSc1lEQXl4cEx4Vk1ucGpxNnkrdTJGSmlTaEpKb3lVV0xtdjdtL0JhZ2FGUCtqeC9xdS90M2ZVR2w0VWFoUDFmYjJsNDVkMzRkVjVUeVgvMU9tSnJRaWUzUEtEUnZ6ajJ4L2FwclY5MTR5MHZIenU1b2JDeGgrNmtUdE1EM0xuVDVVL1dyVlpwOEVuUUM1ZjdiL2pCbEhSUlNyQU5zcWEwYmUrdWNobDJkbGZWYjdSaEEzRFF1V2RqNHQrOXRTK2g3RlVaejllNis2aWUvdmFjaXowRkNsVWdDU21qTDdzcWNJMUtUeDlKRXBJM3NZd0JDemZ4bjVFOGZrdGJSaFhkY3RwNTIrY1dYYkRoMFdsL2NzOXZBbWFJZUlQdVlmR3FWV3JxNXdlTjg2S1p5TGdLS0tnNE9xTEVvTmRyM0Y4NnRQM1JDYXV2dVVuZC8xVW1pVDhhUHZHdjBCeTRjbFlqYnVrN0ZtUC9iWndhZmVESG5WQ0VKRDRNekNvbTR0MmdPM29lUTZ1NUpPTlNBUXlOMksyUjNjMjF4WkFEZWZEeG9sei9tdUwzbkxkNTA4bWs3Y1ZGUExidnJSSDhwOWNnN1RUNjFNazYvVk9xbmpPVzJPZFROQ0xCRFVWK3dwWTQzd05ZYjI3U3p0SHBUWVNCWGJXbUl6NWljUHVLUWxQbG1YeUpGQi9Rei85cngyMmR6YWhlemlqc002cG93T3Y3QWw4ZmE5ZElBUE1wSVJLMzhrWllDaTlFUmNmUE9MOXlweGRWV0lqVFcxRnc2OThKTnA1MnhmZHFNWGpSUHUvelFsU0Q5MlBkcDJxRWRuNjUvL0hLRm91b210b2JTQjJncDY1QmxTQURxUnFqZ0lSV3h0SlMxUzMzL3hpL3RYYjZtSUNhSW0zYUl5LzEwMG52bXpySEt6QURZNWlqU3JoNGxrNjFObVY2WU9LVTRia0o1OU5oeVhYMDFXeWYzRWJGQzNzc05KbnE2a2gzdDZaM2JNdHMyMVJYeThsSzhGQmtOeWJnRklzQXpaM1dkdjJUaktRdDNaTkx5R0dlb3lKYndFZ1BBdXo5ZmZkSkI0S1hpMmJGMFB1VHRSSmdKaGJMWWdDQUJiQVF6M2lDWXRlc0txR2dHYnVPQStOenk5WTQvdk1vbmoxQ3FIUXhSUHFyUmUveWJiV0lnUlFQd01QdUlhR2xwcmN5ZTN6OW4vc0Rocy9KVFp4UThtdmdRaVkvR2hDaHJ0dXphbmxuNVV1UHFsNXRlZXE2bHE0TXV6eVh2SGcrRjRvYkc4cGx2MjNMNjJkc09uOWtqV3pCRTJPaDRzRzA0OS9LK2p5bW9VaTFWa3ZYcDlPZ0dXYStKZnJQdDFENjZWSENFc3NiU3VJWlNxSUIrOHhkOVAzb291UHpuTGJiaUVyUnp3bEdwZi92RUtGdlhXenpwSWJrdGJoNVZQdjM4bnBOTzd6OTJ6aUNTenU1OWJoWXRMV2J0MExXdk5UN3o1T2duSHg1clJpSisrSkU5NXkvWmZPcWlIVm41Mm9Sc0xHYkpRaTBRbHpic0FsdFhxL0dsSjQ0QXVyc3ZWVkpOMlZTTHVaNURvSzVYdFZxRTB0SmkxaTdGMHJxR1VDd3RaUjJsMEMrc0tkN3dwVTRnOVVKQ28rRFFteTZwditidGRWS1JQalFBdjU1NTdPRGlLN29XbkQ3eXIwU1VHVXphcGNFMlJTajA3eDl0ZTJOTmR2NjhiVWZONnVZMzQrVTB3V2szdnhyUnBBOUpQWVFnVHovNFlQN0JGRVJIUUxxMVB0VVlYRXRJSEVOTFNUa3VBVmdhR3Q3T0tJV3llRWpMc0lUbys3L1k4ZHFHTW1QeWlKRWtNZ3F4cHZyWS9mL1VTck9RcmVpdHVQdGJ4NTg4WURrdjZST2hScU85ZlZQQlVlclRibHNveEtvVkRBRC9RRUdUejVPVHpUK0wxSEtXSk9ZRTRKZXJWVG9IbENxWk1mWEpCaG9BczRxZ285SFVzTVdoakhkMmxKY3VIOXk0bzFRbytXMHRpWmxUVTR2bTF1TXBHd0pzUmRaYTF6RzYzUVFFV0xlMWNzM3RuYm1pdUVqQ3FUZnM4MWMzWEhRcVRRbk0yT2I1TzI1M3VZTWRTaHBMYTRsUVVtd01zQWhid01UaSsrVnlyVkNNMWFyOEF3Vkt2RGthVE81SjVOaHdhdEgwNDU2QitTUk1BOURXa0d5UXg1amFPQ3NIa3g2T2R2Wld2dldMcm9lZkhUQ2JxYmxKeEdQWExtbDUvOXViNG5oQXpLYWcrcEQrQnBhQVB2RlM0VFBmN1J2STArYXlEUklNQSsxMU4xMVNkL1VGMlVoRno5LytqNWFnaE55MHROaG9MSTB4MkVUV2dZc3R3WWFFTExWaXNWWW9JZEU2RFBwUGNtL0d3dFNsVm1rRThMdm80QktvV2lwbng5WW42L2syR0RFUzdPaklacHVBRGR0THQzeXRmVTkzUmFpemdRb1h6czNlZnYyWU5CNzJtSXEwUWFaNkFLeUdKYUIwby92bG53NHNlNjJFbllhdEVOK2ZPVFY1MDhWMXB4MlhGSzVWb0RBQVh3QmtBcXY2TEk1UTFzTnZoK0NScUZoSXNDNi9WcTNtQ25SdGd4RXd3NERrbTZVS0tpSC83aEZBSjRCYXFaeHBxK056Z04xeWJuK2YyOW1mcTEzNTJaMjdPOHRxaGpoandFTDh2QVgxWDdodWxGWUtOV1V3bElPaDdXWkFiOTlUZmVybDR2YTkrRlpnVWx2OG1PbUo0NDlNY3A4NEVrdU5wSS9uYjdzdGNKQUVQZ2JEckRoQ0RZWU9iWWZCUWtuY2pBQlU4eVcvVkVIMjhYTWQyZjlGNFg1TVJ3R1ZNQUEwWkhRQzBKTndzWklablVrMW01TXdHdE0yVmJzckFzVG5Hei9yK3NrajhzaVRKSko2U3hILzFZK09PVzIyek5SQmRkV0lHNWxpNlZpMFVVdGRyTWNXVFhoeTZ5K0Y4VERmOHZETmw2VWhyd1JMUUpnS2xnS0xpWmRJdjViSUp1UFpKQ1VYajNlb3FCMkNHcnlsWEZkYUVLSkx1aXBsR0Y2UmJrWjRSZXdkeUZmdlhzcVg2dHcrekFFbXNRUTE3MWs2WUpvaUpzVnQyVkxyWll3cUZNQXhVajJJRk9wc21NVHdkOEtLUWpYVlltdnUwNnRVQWlMVUJoaEFHaTcxeGxQeFJEMlBBVTh5QUFoRDR6Z0tBSkFhdEtjaTNoaGRrcHBJWjBXSWN5bGpwaSt1eVJkTEdHUGlxQzdDZUNoWjltb2hWd3cyTXRTYVlGQ3hDSFdEaGJKWEl3MjFBY0FhR2Rmb2FFMVQzSVpRMHhTSkZ5K29GSWszWGx0ZEFnUkVXNnQ1Q1MvUmtNUjhpY0taNEVJZlBrWWxMNHhRbE5WS2REZG5teHErWldoc0NjRG0zU1ZVUS9NUWJzTXdJY3FBYUN1MnQ1ZTVLV25aTkJ2cUViZU1DcEgxU3J4eEFkdGlxZ3RsTHcyQUVCc3ROVTF4RzBKTlV3SXE3WXJGclc1Y0dpQmVMb0lEU21NUVM5WW5NQUF5RjhseHdJUGhJUXpaa1RNektTenBtcWhRa2JxbUtWbXZiSW1zbEkzR1czSjJmeEpnWlFKSm1Ca1BYVzFwNDZHV0RiVXR3eUplMXZCeVVXb2pUVHk4aHJLWHB5Q0hPMVJDaDFKVFhBcXZFNCttWEsrdFRrMUpKQmRwR1FFWWcwUjluQThDUGc1cVdnWEpRQUFIU29aWTE4b1VKck9RTkVWbXhHdVJGYUVpRzJQKzZHYjAxQW8zRkVDT3RCUjQzQ2p6Nm9PMHpFWVVRM2QxVnU1N3F2Qi9mNW43em4yNTN6eGRiTytTdDloTjBXQm5HNkxiS1pobTJzMmYxaTFBSWNWYWNHQXhGRXZyWXVER3U1R2lzYlNXZlZKdXAxYXFWZk8rbDRqam9pak9GMFlhWlo0RjZhT0lNbDBJTlV6SzBISGpWZzlhZzdJWVRXemZVM25IcDlyRm9oNlI0ZGowaVlsZi9tTXIxNFVKV2pDYThqZnVySDc3M3Z6dlZ2RDNkTERwY3ZFcHFSc3Z5a3daeTRlcUU2OEF5bUxyeGN1NVJDSWp6TVdPbTBzbEVtUG9lc09SMnRwdzhhNHJRamtzbm83RjAzanVyOU1SK2lZdVZmakNnTzhXcUpmbFFmNUxQdHFVS2RxNFhhOTRhMVBHeGVjY2tVS0R4Q0FNU1VKRTJkdm15eDNHMEpackR6NWJmTmZuK3g1YlR0azN3blVvNFA1bHBiZC9xbi9aeXZMUWZuRlRacFBnc2w2WmdseDM0TFBSUk4zSzFzdEZxZU9TRnVBVjZsUjNYWWgzSTdWdUlvc3MwODR1Y3hFYkVjTDdGU0c1VTBDcDVPZzBRTlc1RExzaTBvNzMrb3NhNVRHRGt6YkJTbERYOTZlTVRWeDFibmE0cHZ4blZwWC85L2NHOVdyS3RPQzJRWHZPZFYvT3JkbEMweEZYbDRyd2hWc0RWbXF1Z214MEVCcU9qbEliTDhIV3hUcndXc3BGYWJncENWQU1WN0plYjMzNWhBeXY5ZyszYUpwOVF0VmNsY1pweUlxRUJxMVo3N3lqazdkYzNnZ0c0VWFCT1ZLWWo3ZmU3cmlob1Q3ak5pWGJpWWNndC8xZ3NFVDMwYUZhUUVFTHdMRXYvSWhmTWRJT2tqYWJBYjlzSjFtMDhjVG5QbllLSTZuTEdqUldMTmNlZTdiN3ZxV2RUeTd2MmJDdDBOeVFhRzJtQ1ZkYWNlS3hOUGhOS0NuSEpjQmR0Zkh5VHU3WDZGRG1SQWNYUXJEeStaazBoc2VQSi8xa0hmYnFVRHZEVXl6ZWNsaVNkdkRuVjVkS2VISU1vM3BZWmt5TWYvT2pUVWRObFZjV3RJcEUwZWVSRjByM1BJVnJXWk5ubGpDUjhOMWQvbkV6NGxQSFV6ZUM2cXFIdE96NUd6K3VIRXJkTDY4YitPZnZiOS9iWmM0ekVQL0MwMXB2dm1KQ1NoNG9tZnFta0pKUW82UFV3VkZLaW8xQ2phdmNSNW1QeXdtWlhjZytmeUZUcmVGeEVFN0Y4WlRmZEtoNVpzQWhwcnBRa21HMmhHNnlmdmhRN3ZFVnBZMjdLdFZxTEp1T0hUczl1ZVN0NmZNWHBGTTRxZHZJVU1WYnZwMTdkTGsrOFNmWjl6QzgrOHprWjY2VVo0WHNjVHVvVkRBRzRCWWdXTURwMzlyTnVZL2RzWkdPTlE0S05mNjJCYzJmdm5xaUVnU0x5OUdoTlVtemdsbEg0cU5Vc05KYUtWWWVTTVNUR0FPMjBQSEtENFhrb1RRTlFCSFhRaTJIcGVOcHZtUzA3VUJaYkFDV0ZpdWc5dklGdno3TEI1bjFRbGtjVkx6dzB3T2JkK083UEhXS2pEQU9jdy8zZnZJUC9LZ0tKckV5MEFCajFITUFnc3c4RmF0OSs2YzdrWDFxallVcktIdjRtZDRYMS9KZk85SmFYRkUwcXZOOEo2MXJheVpBWmoybGpOVXJrVUxGcFhYanFWbzhpUytCcWJCRk5nVFRFcDhHK1BsZFBGYm9wRnRXczFKYlhiQVkxY0kwV0M4b2RiNGhTNDJGSSsxMnVoVmovbUFleVlDQnFRcTJTS0c2R09XTGJsTU10RElWTmhwcXI0TFVzV2xIWWRXR25MYkd3ZzBpVk9TWHYrc0tObEhyU3ErY2RoRWdWRllzOFpZeXBnRFhwZFJncG9rc0Q0QmNEbW1ZT1RIUWh0T09HNDhYdWhIalZHZXNsRFVvdTNSZG9rbVJaaHFLbE9BaEZmMWEyeWlwUk1KT3k4S1ltZC9XVE5vMkpXdDBXcllXZmhaa2ZPemV2bHZlelpQbUlJWmdTZWlwRi92M2RQR2xyalkwYkx1SURLZ05pRkliSDZZSUFJZ25hMTZ5U2pNUEtNYUFSUWFBOW45K2lFMkdmSWZ6V0lLQTI1cGcwaEVxRnFIaUNxb1RkcW9Ebzd4bGVseXl3TUlwRVNaUVBZcVBuZ3JvVm5lb3V3MDRBc3lhMEFhdVFLUUoyeGlKZ2FoTjhzRHY1WTBTcWNnRkhpN2FqbG14VUY2VFdYR0U2bnBEVkFNUW5FaFhjUTlNQndIczJEektQYVlnL3VOM0dBVTZDRHJrZXRTcHlIV0RGU2wxWEZhcnhhMHUyS0VjY040OHpCWkdrQjVsU0lrZ0VwQzQ1Ny9qRkw0RTRvcGFRcHNoTFFQTHd6aGRCK0dqcDJkUTFUYm1Rc1grdlUvMFZIVmVsb2JNT2hESDFMUTJoTm9WdTVTeEJvczNDRWhrcWw2TUpobDlOZ2MvQ1I4Q1BBRHhHRjRQOVhKN3pNK0dwQ0pwYmNxbEZoTmdiUU0wMkJSMTJRSTZmNlozK215K0VDZFRzQzJLallCY3VqQStZd0xYNG9vb1FUdFN4SXNWT1VjQVFtdGpXdUxISFluZmczTzdKTFpaZzJOK1YyOWwyU3Z5SW9WdFNBcXZVdGNrbExCRFEvRW1FdFM2dUlScFBGM2hJNEF3LytQRFZMTFBSNERuSmJ4Q1o2MlNwd0JwbVF2aWgxTFpFa05KZzFwc2l1dENzTkk3cmt0T0drTzM2WktHVUU2TXhHWWRHdnZFNWJCb2tSVkpPOXFVdGlZclNuenU1aE9Za0dLTmErOFlUZlNNeVNaR2tnQVNvc3VrcytjMUVCU0RXQU5NbXVrYjIwdkxYczJ0MjF5aytMR2phRisxWHRhQ0Eyb3NTbFY3bmw4dEpIREt4ZXpEQm5KUSs2aWhRc2RISlZmTnR1SU13YXVXNmlTNkpjWVNwa0hrY0pRMGxzYm8rK2xrN054NTNvdnJmYnJWZ29XTkJnRXZtT1g5eThmaUxRMlJMakFZWVRNOC8vWHJIQjhBN1cwWC8rM0dycjRocnc2Z0drY3cvbzkvUG1SU1c1SzVWdVFBZ0Z5aDl1RFRBdzhzRzF5OVNmNVVIb2svWTFMcTc5NDc2b1NaNW90Y0tLZWlhQ3l0eFZLLzBGa1hpOU05UVFJN1BnMGo3VHI4ck1KOFIxL0J5MExGU2wxYnJWN3VQMUhQdG1PMDIwMUFCbUpSS2pwQ1NUa3VwajliV3YzRms3VlZXM2pzc1YvNHh4L3V2V3VSZDlFcHRBUFlZTmFSemNEU1drQTlmOTIxTGhmM25iL3MrUEVEZHBTcEVRc0RjdFVGTFI5NkoxK2FRWFJOYTdjVTczNjgvL0VYY29NRk9zcllFZFFGK01yTlkwNmJrK1Znc1RQUUVERXlnYkxZTC9XbmErVzAzSlR4Q0tCWjNKVHAwMmthQXg2SmNxVmx1cCtpSTVPcjJlb0tJTHFkamt1d0FWZ2E2a2JDRmFheEdOMFpiTjlMd0ovY0ZtdkVhNUpPQUxCRFNXUHBHSlZpQUs2SlJ2dCtlMWZsMGs5dUpyT2IrZ0F6YW1xSVAvRFZLYWtrTHB1S3Bkb2p6dzArOFBUZ1MrdmU1RmMrMmJUMzRGZkdOZFh6WEtKR3E0UE5VbzBBZ0VvK1VSNnNvd0hBR1BBalRiUkl4NEErbWFCaEtNc3d4UHhLNnhGMEV5ZDFFU2ZCQVlhT3JHakU5UVlhUzJOME1XbHRuSVNOVWE5UW80TXRVWnI0M0UxekFoT00rRFRXZVNzM0ZMYnZrVWNmYmlvRFROUDZqTWswQmZuL2NtL1BGLys5ODdFWGNyczdNV3M1MFdqUUVEVlhxbmplZS9TMDhOd0ZINE9BQ2xaS3gzZzVsK0lUcjk0RnlJa0F3MGpCUEJpNFdhTi9WYjg4NEdkYVVFWHFRdHVtRUNHQVJMQU5rS1Zqd1hKWWFveHU0OUdtN0lvc0ZXeUswcGdNUU1CVjAvVnBQTFowT1YzcWlBdy9Ccys4bHYvNVkzMXJONWY0d2RId01TSE1zTFhKV3pUblAvZldqUmV2bFFkVHRNQTFEK2VmaHdFaEVJU1lwbnkvVW94VmNqd0dNSmtpWG9oUXNRc2w1YmhDMUdnM0hzdWhWSFNFa25KY1NxMEYybmtXUkNiQnVFaXFuVE8vbnE1YktHTXNIRXcreFJRRG9aTXRPR09OR1FHN01GL0VPWlJNS05IMWtvV05MdVhJZUlKdmljbkd3a05nN3NYbzNKekE3TVE2UWJyVUgrL2JUSlcwTG9xc1NGdVd0UkJ3VjhRNlNpbUFTMEREa1phU2hpVkNEUTdSd090WDdWZVNvV2h1eUs4dFh0Z292Wlhza1kwREFBRFZMTmpFTURRZWEwVXRHM0hvZUxtZENWYWtWREMwOVRKbDdNWHhyVGZxdzhKcklhSERBR1BBSjJjcWZKYVdVMFdwUDlHN3llT0hTSFpGVHN1eU9nRjJSYm9sUTZrVTEydHdZQ0ZBUnJaTGZMQWk2NVZnOGZxMXF0ZTllYXpjQ2JNRHZ0Q0tMMTdVR01mekQ4TG9NQXZIR213QUpBaWhHR3VIVlFoYUpLSGQ5dnlUMHBFVktiVmJ6QTJ3aFNsSDBnRHdUQTg3dEdrTkE1Q2d3cnMvbFJRT0Fvd0VqMEhQeGtTdHd1MXJVMmE5YUdISWlrREZGZkZLZGZFYWpOWmNpMUFUTDBaNDNXQzJjR3ZWWXJ4NzQ3aHFLY3Qzd3VLd29WeXpXcTJ0M1ZSb3F1TVJnRkIvRlRtWTAyRHRBV2F6c2J2NGlyT3oweWFZd3k2eWlaWmlLOWtTZU9ta1dwT25jaVF3OE42UGp3aE5STmp4YWY3QlZ3Z0pBbHpLdVVUWHVsUWxUK0hjR2plRkVsMFJXZzRvQW9RNldMMldta2hZaEVveFdPTEZwVjV0cmRpZjZkbzBvVmJOWUYveFYxM0JQaExXZkExNjd4UDlEejgzdUhPdjNJdkJLQkZjWDZNaGdaM0VJYTdkWUpxMTMzZCszYzJYMU10bEpObnBJNGlYRG9XeVdMMTBGVlFhYUV5a2s3S0QwODVPYVpmN1hyNEVxdkVQS1BFcm1tcFpYdU90NENLVk1QK3dxV2xLcWI1TjNxTGdocVZsTElVYkhhV0NJMVIwaEpKaTQ3NG9aS0M5WmJDeldYWVVqd2ZnWFRCVE4zei8rVldGKzU3cWYvS2xmTFdxMFNRbWdXWUpHUWtId1l3WnhtS1pWT3pja3pMdlhKaWRmVGd1VzlsR21vRVREeDIweFFGZ0RIQXJrQ3oyTmNWVHlYZ0ttNDRCb0pIa0N5RVpBQlFhZ0dxTkJnQTNhSko5dWxYR3ZRSUdKdE5VYVQ2a0dFOUp5MmhUV2xidGJoamdDQzRxWUdJaGNTMXNITDVsZ0VvaDJiZHpkTGxRaDZtU1QxUmVpZ1pnNWVXZHZiVExEeno4N09EV2R2dWQ1NXVuMjdHNkFTUUJwZG5tM1dmVlhYQnlwa2wrL2FPRkJVR0NXVWVwZkFSRGh3Y0FsenFZK3ZuN0FLeVA3d1BrNVMzK09UR09BK1NkQndBSGhQekNxVlpybWxTc2J5dnpYVUxRdUdMU1VlcmdLQ1hsdVBaSjZSVFd2N3NsMzkwczF3czhQY29ZSkx4YmJ6NWo2WW9jLy9LWnc3VWFpWnZXUHdyelAwZzZGVHZyK1BTU1U3TW56WklmSnBDSVo2UWVScWpSQ0ZaYXlhY0t2YzB5QmRHWkZ0M2daOUhTdmprSTVHMEp2RWJIa3cvR1FBNEZPUWd3UXRWYUlsMXBHRitzYTZXOXphd0xTNE9oTERZQXk1RW9MUVViU3NDMFFNdGNSK05nUjR0ZlM4cVZnc3lmeUQ0Znl0NzgrZk50cU1yd0djWnlPQWUyeHBvbmo0MWZjVmJkK1F2U2VCY1RFZUpoclJYWUtGQ3dnTURMR2t2WEc2TnpRTEdQQjBDMm00WUIxejl5UHFFUUZqNE9kQXprUjhYSVBwOFk3QURRa09CdmZmakpUS1ZoWERIYldncU9CbDVSZ0tPVUZCdUhvU1J1RndCcWxYaXVveUhmM1ZTdDBwVVpYNmZSWmt2cVpSaTRlUFBtemVOcWFNNDJSdUt3a0dNRXUxK2Y4VzYvdm1uaDdEVDZBenQ5MksxQlJrY29sTVg3Nm5DcFAxTWFhSTVuTVA4a2FPcVV2UWxuWXZQTWdZSnh4VUhaNTZOQmg0RmZLdVVqd0E0Sk5Ic3BsaEpWMzBaSFF6RlZwMDkvcFRHN1h0VllXc3UrdHBQK2xRYlN1YTdHWWwrOUg4T0ppcVpLbmpCcGd6M0tPNTE5U1h0OEVpWkxZdkxreWRoNHJzMFNTbXVBaDRjQktWZGlWNTJieFV2RkVMYXBoM1NFQ25Zb2FTd2RTeWdBM25JK1ZhdWs4VEFDZWRmVXErWTR2aVNTc3pLd1dLR0ZxSVlnU0dyaUZPS1ZCNU81amt5K0sxM0ZmODdwSjVKVmMweklWcEVJWllDbG9VNlA2SjZXTGk0SDl6YjE3V3pOZGJaVXltbE5zVjRUa3lhY0FLWWpXSzRqa2p3ZWt5Wk40bGFvTldtT3hNM3dtMkpzazhCa0luYmFiUE1YOE5UR09yQllLaFlTcW15OTFpVkZLQlpVU29OWnY1Yml2VW55VG1PQU5DS3pTRElFUVBKck1DQ0hBT21EUER4U2t2eERqREZXaXhmNjBxK3ZiZXZmWGU4VjR1VmNzbHBJME0wcXJ4eVA3ZTJEZnJxeXIxVzhhcEZ1TWxLRnZteXVzNkcvdmJsdlYydXh0N0ZTekZBYWFHZW41UE5FTDRtbXZMTTJxU2NxWndKc3hva25ucURkaEFRcGRwSWRwRGlNM1JpUWRNcGIrbzFSZURMT25Dd0tvQ3cyQUV0ckpPVzRBb3RRNElIMlViRllsanJBNTJIZWVoUkpIb3RzR3RmQ2h0RkVSQ0luWjdyOHFlS1hhS1IxOGpHZ3J5KzVidU9vdFp0YU51OW8zTEM5cVZpS1pkTGxheGF2bmo4TC93R0hOQ1lOOG5xb2ZiTTZFbGszZlhncjhLR0VoZ29tR2Q1T2ZveG81aUs1ZnROeXdna25TR3V5TmhlUVdFeHJhVzN5T3Z2b1hvNWsyQkRBVzYrcXYvd004MHR3NkNHSkRpeFNSQmxNZW5nYTY5dldGaytuTVB1bmNTQ2pTOVFUN2dOSGtwZ3RvWVg4byt5VG1ERXdKd2EvdXllOWNrM2JxNnZiTm14cDNycXpnYzdhTVF3WE5OK3NvcHc2Wi90N3psdGJueW5yQmtqTEVFSzhSbEdhZlNRZjJTZXhtZVhabjRCdUorYzkyR2IrbnlVaHh4OS9QRnFDQktrTUVQOTVsY3ZQeUo1L2NtWlBWL1c2TzNxdHc0MnhaT1loaWJ0dmswZDRObmZpc2RSbzFMQjAzOTRZSGU4RDdhTVRtYVM1Q3BJQmtKN3diaWlpVlcwTGZIbEtvT1lYaS9GVnE4ZXZlSG5TNnJWdG03WTJhOUpqRmY0dmwrajBHd3dBbjhveEJrMzF4UnN2ZittWXcvWnlhMUJtUVd1a1JpbDVrbjFKUFhOS0wrZlhGTHV6aC9kNmllWXJPQnFBdWJMQkxFRldxZG5qWnlZdlBUMTd4dkdaVEZLcy9zWC8wTE54WjJYWWVBdnZ1clZ4OW1INnRBRUZWdkVNcGFRY0RCME9VT3lYQnJLRm5wWjQyZzZBbVlLa015U2tRcHNGUmY5NmVyUFB2ekIxK1lwRFhubHRVcUZJVzBYNWxaZjNlUUEwNmZnRCtEd1NlUHNGUndBd05VSFlQK2ZralZlY3Z6cWRDcjVyd3ZxUVFRVllQN0xKQ0ZxZUQ5TEhuR3pjZ2hnZUtxMGU4K2JPblV2QU5BNmh1OVozTE13c1BpVjd4Q0hCMzViakV2dnBvL2wvdWd0L20ydVl4RU9BTDFtVXZ1MEQvTWNNWVJjZmE4VHRtd3FPVU9qQnZjM1ZVb05tbjA0RGZCTFQ3bEZuTkN5UXZyN3NzbWRtUFBmQ3RGZGZtMUt0OG5VeEd1VGtjbkdHQVpxbUo0TXhZUWtBNXUwNWRHTFB0WmUrZU1SVS9FR2FRRFQ5a24zSnFhU1lCNEEzakxSNitha0orNkM1bHJiaXpaa2pYMG1TK01jZGxycnNqT3c1SjZZekk3eHZYQ3pYVHYxd1Q2RWtkcklwY0NDZHJMeGwzMnBzd1RmalFVWEdCbURwR0YwYUJCdk5sdDV0YlY0aVRRTkFDdk1QM2RuUWRVWkNlb01vRVlwOStaVkRIbnY4cU9kZW1GNHV5N2NPSWdSUWVDdXAyUHpxYk1NRmU3MlRmUW1qQ3JwVmw1eTM4dUszclVyaHo3U1RJSldzSkp0RzB6RUdiSURzSDdLWkhBL0V0WUc0WFcvSEkyZXUyVktKZS82MGlZbnBFOTFkbnZVUWV1dDNjL2Y5d2I1c1FnWnhRU3orNUJYcDk1MmI1cnEyT2pvU1lDeXRpM1ZBbzk1S1BqV3dad3hTVHdPQVowRjBTWWY1QjQ4aUpBRmVyRlJLUFB6b3JJY2ZQV2JiOWxhdTZJbzBSWUxHUVpCbFdxbzIwNDVZWEpjZE1La2JPM0xHM2h1dmZIcnloRjYySUkrU1NVNnVKdHJWWWcrOFhNV0tRTTkvOFd5MGp2YWRsVVVvbE9JVnIxZmVkL3NBdUJnZ0RtWTRZMkw4TjdmWFljWFNDTHdTd1RyY0s5dnlFTXJhOTNPZFRhVmNFKy8rTWdYcENZQm1JSnB6aTRYVXZiK2VRNm52N3E3bktzT0t0Q2FpSytMZFh6QVZrM0VCZ1YySzFGSzU2ckxuRjUrOUVuOVVUTEpxL2tFRmlaYThDK0pxSkFhd21SRnVNRmFjcVZCMHRQOE9OdlN5enc2czNpSUhMSHNnY0JtRzVjOC9VM2ZjRExsM29ZOTRiR3RNWFN4QVlJQVY5R3dkRjh3L2ZBbkVBK0NWSzZuN0g1aDkvd056K3ZyMXJ3Ry9tZWdLV0FSakZkeU5ZWXJaSUVlVDRzU2Q4Slp0MTEzNWg3RnQvWnBjMXBwcGR3QkVMQWhCRXJTWitOejEwNENBNmNPckNhaWpuWUdoaStrblh6SGYxWkFwR0ljQXpqN01teldWSmtMaVExb0xPc3dXcFNLaEZaRXVEbVRMZ3cyNDdPRjVIeGR6K1BPcDNtTkxaOTN4dFhPZmUyRkdzWVEvN3ZQSENYVmZpb3NwVTNMcUZFcmJMSVhPTUhTSWhUV3RIaml4YTgvb2gzNTMzTmkyd1JuVE82aTIvSU9ZcFRZbXhVTEdMTGEvZEFRc1g4VEFkRHZjZjE1YWk5SmkyVC8xNW9HQnZOaEpZQThJdC9ERnExT1hMY1FQcnJRaWxoSmlkYmh4Rnd2ZytMNGRZMnJWT25NQ3dCR3crdlhKZC8zSGduVnZUTUlGbmUzaW55aXlSaXQyQStnVGJJTVJ3YlE2QXJKUzc5UUZyMy93cWlkYm1uUGd6b1lJMURqNmFETnVheXg0UFIxV2MrYkIrcmdRa0tKeklydU1ONU9LdlgyQi92RW5GbGdOWmhqelowNkJOdFc1aFlDR1dsTWFiRVBnTGVlU2xXSWFPeFh2VngzZGpkKzRjOUZuYnI5dzNmcnhmS0E3UGY0VFJScXhUUW5BRWFCN1BSOXhYQ3dta0xSNDJYTkhmL2gvZmVENUZ3L25uVjdiMFk4OXFLZ3IwdE9Jb0k4NEFrNHp1WUF0SEMyVVFXQUJvSFBBcFovTjB3VUVUR3hoUVR5Ulk2WjY5M3crSGJkVlJHTnBMWmFLaFpZV0crMzdmVHZIVk12MU5QdkhFcW43SHBsei95TnpTdVc2V0l6bUhFcUJUQlRvN0grUHlHWm8va1lXRFRoNzBhcHJybnlpdm82dkQ4a1E1SDJJQk9tQ0pENzN3VU0wenMwakZUQ3hJQmZjb3FFeGYyeUxSeFBSOHRmbG9waER4Y2xmaDMzcnB0UkVYQTBpRXFhZ0l1c29GUnlsZFBlYjcybW0yWC85bHZGZi9yZlRuMWx4V0xXYXByMlB0amxHZTkrZllmN1p0OWpHQll4VU5HRGpsbkZQUFgzVXRFTTd4bytsaTFUcFMxaHNna0xpT3dOZ3RadWdBRWRvN09SajZIb2t0dUoxUEdjVW9VTmgwaGp2cXg5S3pqK0t0bW1reklwbUVCMkpnTkk4TkxDck5WK3N1K3ZYYzM5d3o3eWV2bWJQUzhXOGxCZkRBUEE1amdhQVJGTHdGeUc1WEdicDc0L0pGOUxISExVOWtUQkpJZEYrUVFpWkxWYWo1eisvZ0VFNFFTT25oclVFQTNmMitiOTVwcks1SFQ5ZW1IdTRkOFljai8ra2Z6aitUYWlEb1VqNytlNkdaNStkK2UvM25kalpNOXJ6NkNvejQzbnBtRWMzNkRRQS94L21uLytTVER0azcwZXVmK2l3YWUzYXJVQ2tnd3g1RjhYU2YrNGtZeE0zYVllU3h0SXhLalhhalZkWGhCbzlZc3VpZytyVllvcXUvVC95Zjg3djdoL2x4YkkwQUo2WG9ia05Cd0d5VHhkWC85M3p6NTlCcm5qbnNzdVdQT3NjQ3R4VDZhNEtDUFVFZmViTEQwcUJYSXB3QWVVU3BSeWoxeW9tWHFpNlRCRlgwTElFRzRvQU5nSmJpb2N4ZmJ0YXUvc2J1dnNhYVgvSEpRZFBPN0Znci85TFQ3M0lUMy81MXM5LzZkTHRPMGRySGxpUkdNUUVYUXIzUDBpUVlsT0VScnlrNFNYTUplTFM2cFpLQUFQMUNyWEJxSjdiMjFRdHA3ZnVicVVaWHk1NDZKVEx0MFd5NDhzWTdCL3l5cXFwTjMzcTZnY2ZtK3ZYWkp2UmNTQmFLdFA3QUM3Yy95QWpRV1lkS2hZYkdRa0lwekxxQmJVQkRrVXdsMWlOcG41YytTVGlXOXRiaDkzOStmUXJuZGsvaHNIM3ZUdC9lTTRYdi9iT3JtNzk1UlFTSUwxbVpINGZnUFNKeWFWT2drSXU2eldwdEVhaExsYXZVeDBCYm11S2kvM1pnVDJqOEZWR0lyNWgyMWl6Ky9ObFQzVDMzeit5YjJYNXk0ZGRlOHNOUzVjZGc3N3l4NG9jQVU1cWtCMDNmU1pCRWlPdXdNdFk0eDBLYkNzYUY3eEMzYnBLeS9sVTM4N1IrTTZVMzN2WXZIMHNuWExscXQrZWRaM2RmLytUYWkzKzlUc3YvTnFkRi9iMTYxc0xrZ0Z6QkdobUNROU4zekQ1Q2dlYmVGRHJsUURqUWxNUmF1SmpsUDFrejlZMlNqZS9LcFBvR1dqczdtdkI3bStPQUF3QWY4ZWhtNzdmeWhOUEgzUERKNjliOGNvTXpoSnlJRWNBbDFEdWlFb3grUktzQVVJTjFuZ0RZT0hNSW9DTmdqWGVSSnI0WW4rbVo4czR6ajYvU0pPSWI5azFoaTgzK2FMVFREN093NS85ZXhnR0J1dHUrK3JsMy9uaGVZVWlmakp0cjRJa0hVNiszTXdHMUtiU3BSSmdnRmkwcnNXa3lXc2pOVDdYMGRoTDB6MmRiSkY5Zk5OQ2V1c3V6RCs4KzV1cGYzK2VmSWFWM3k2ZCs1RmJyMW16ZnJMbkw1dkZGa2tLQTlGWVdndURJQ0RpRlZlRUdrdzZRcUh3Qks5L2QydSt1d2w3UGI1bFRDUlllNm5FbCs4OFovbXJNK3lEQitmSkQ4a0JOUXdrUEFYWkhWUDJhNlh1UHM1R3BVTzlncm00a1RiQVV0UkZxUlNTWFJ2R0YzcWErQnN1M3ZmNWZWVjVZVy9EMXZFNEpqRDU0QWo0TXoxNS9nc1Zub0kwVTI0MkRVYjZ4R0twWUZQVWErdmFZS1lhd0VadW1Rejl1MXM2TjB5b2xyTjR4Wnd5empzK05FQzhxN2VwdTZkRjkzMDhrYmY3UHNrQk9BeVJJOERtVGhMSEdsNG5BRjdqZ3RkV3QxUUNiUFdnU3FFMzI3bCtRcTZ6UmQ0Y1R2Q2J3L0x5c0p4K2NRYmVTU2NBM2ZmTjFDOTVQd0N6VHhMUGQxRlhiYVpzS2tsTDRoZ0Ftd0NoTnJPaFlHcFFMRGJ2R2xuc3kzUnRITnV6YlZ5MWdwOEc2bnZDS1B4REVTcDgrcVhaZnRQV2NYd0JpdXRPWitvL1lDWGV1NlZoNytyR3dUM3BHbjZZcC9seVJzSlF6YXdOTUZRd0FpVFllaEhnVjJPNXZZMmQ2OGQzYnhsZnp0ZGpyNWQweXlsWE1WS1B3dSt1dnJGcEFtMFZ2dmtMOW4yU0EzWVkwUE5hSmRtL28zN1BxeTA5bStzTDNVbiszWWliYUM2YVdkYVNlakZLSkxBTnhpOVBpbjNwbmkyajIxZFA3dHM5dWxMTzhpd3ZPejZOUVR5ZVJ2WkJOZlhJUG4vSjZtM1lQTUhNKzZSRkR1U0R3TnY3dlpQeHkwSjVoeHR2aVNHUm1jWlN1b0ZLSlZWZjl1S1NaUktqc1pSY2sxS2pYL1BLK1ZScE1GMGF6SlFHTXI1UCt6T2VIZURaRG5ab1NiSFJuSFIrN0dQZjNrYjJPN3Fhcjd2bGFrNzlnYi92aTNoZFB6b1Y3ODVYS2ZzMW1vVXdCcnliaTZKUFBGVkxaY3J4VkRXUnFucHhuOThJd3hoUVFLMGFyNVdwSkNxbFpMVkVFemVlMStBakV6Z0FIdXpvVzdSOGprV2lHZUNwZzc2MExTT0VxaSs4UE9QMnIxNTA4R1NmeE92OTJTTGtuWDh1d3NlQmpnRVBBT1VZT3pmdjhaeDBBU3pJamVRSHFRUG03SnZVazVqOTJ1NytoR1hIdHhUQnVOalIrSi9mdStDbjk1ek1qWkljK05rbm9ia1lMendsMHZqcER6UmpOdkkxSXI4TktEOXhrdWtiQVRKOTIwSmVsMG9BR3BUQ3J4UktPeElnTDVkakRKQjArVWVGdHViMURYUUdGamtvc2svQ0NVWGVKVTNKUkVZVHh4Z3Z3eXBHQnZYMS9LRHdCU1VIYUMxT053OGtZeDFkVTdnSy8xVU5PZ2dvN2ZZSXdKYmd3TnF3aWE1QlNRNlc3SlBRemh2c3Y1d215YUJrbkpPb0NVMG1OYitTWEM0WUxRU0xTNGRCYTFIMU9GRnRISGRibEhxZWVjeThSRk1QcGl6S05zMC9kRG5RMGR6VDIzaFFaWitFTDBod2VZNWtJVithUVNReGlkOWtBYUJRcnVYZ0lDUC9Wa3Qvc2FXMWJDVENna1l3Ty9GMUo3L1J6N00vOW4zZDhYa0lKT08wLzIvZXl2L1I5MEVtbkJTZGxIa2tPR1U4Skx6bklxMW1SNWFSZ01VTWhoWVljYmh3d2J3a1p3VnVsbE9QNlI2blg2UWU2OFNPcnh0QVEwREp4OS9ZMjdCWjVwK0RTMlIvWkpHZEZDbEROdkV6SUhQS3RjbkZZQVJZQWNKMHdHUTJpL05QaUV5aDlrVmpsK2VySGM2NmpJSDhuUUZRbjg3QTlyK0dPSWhFcjBEMGdvUlRKbnNyalFkUDNBSjBqK2F4TVJZWXVXQlAxMGl0cSszb3ZrLzV0YW5uckl1U0R3dEd3ZCs0ZWJ5d2cwcHdDU0lKa3FsWmhnRjVKRUUyNVUrQlVjR1hoZ0E2TnBwaVEzV1NNWFdKY3RJbDcxZ0I1NTB6cm1tbkJlWWVmS2pzd1JsNEg3OHhPbUFGOHpIeWdzS0pNc05nTXNnamcrTUR2MDhCMEYxYnM4OHVlSUZSQzFRZXBrbmFJWnAvZ1NKMFV5ZXBWOW04ZGF5aWcwcGlzZjhIOHVsS05jcXhuSHNBQUFBQVNVVk9SSzVDWUlJPSIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9zdmc+";

  const message_ending =
    "(This message will not appear when the project is packaged)";
  const messages = {
    connecting:
      "This block will only work in a packaged project on YaGames site. Right now we will just pretend that you are connected.",
    load: "We will pretend that you are loaded the progress.",
    save: "We will pretend that you are saved the progress.",
    reset: "We will pretend that you are reset the progress.",
    rate_game:
      "There should be a game rate window here. Confirm to pretend that you rated the game.",
    fullscreen_ad: "There should be a fullscreen ad here.",
    rewarded_ad:
      "There should be a rewarded ad here. Confirm to pretend that you watched the ad.",
  };

  const vm = Scratch.vm;
  const cast = Scratch.Cast;

  const isEditor = () => typeof window.ScratchBlocks !== "undefined";
  const isSDK = () => typeof window.ysdk !== "undefined";

  const variables = [];

  let editor_is_sdk = false;
  let editor_can_review = true;
  let editor_device_type = "";

  const loadSDK = () => {
    const script = document.createElement("script");
    script.src = "https://yandex.ru/games/sdk/v2";
    document.head.appendChild(script);
    script.onload = initSDK;
  };
  const initSDK = () => {
    YaGames.init().then((ysdk) => {
      window.ysdk = ysdk;
    });
  };

  class Extension {
    getInfo() {
      return {
        id: "truefantomyagames",
        name: "YaGames",
        color1: "#4e1bbc",
        color3: "#ffd24f",
        menuIconURI: icon_uri,

        blocks: [
          {
            opcode: "isSDK",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "connecting to YaGames?",
          },
          {
            opcode: "trySDK",
            blockType: Scratch.BlockType.COMMAND,
            text: "try connecting to YaGames",
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: "YaGames variables",
          },
          {
            opcode: "setVar",
            blockType: Scratch.BlockType.COMMAND,
            text: "set YaGames [NAME] to [VALUE]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "VARS",
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "0",
              },
            },
          },
          {
            opcode: "changeVar",
            blockType: Scratch.BlockType.COMMAND,
            text: "change YaGames [NAME] by [VALUE]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "VARS",
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
          },
          {
            opcode: "getVar",
            blockType: Scratch.BlockType.REPORTER,
            text: "YaGames [NAME]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "VARS",
              },
            },
          },
          "---",
          {
            opcode: "dataloaded",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Is data loaded?",
          },
          {
            opcode: "loadvars",
            blockType: Scratch.BlockType.COMMAND,
            text: "Load progress",
          },
          {
            opcode: "savevars",
            blockType: Scratch.BlockType.COMMAND,
            text: "Save progress",
          },
          {
            opcode: "resetprogress",
            blockType: Scratch.BlockType.COMMAND,
            text: "Reset progress",
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: "Advertisements",
          },
          {
            opcode: "whenFullscreenClosed",
            blockType: Scratch.BlockType.HAT,
            func: "isFullscreenClosed",
            text: "When fullscreen ad closed",
          },
          {
            opcode: "fullscreenClosed",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Is fullscreen ad closed?",
          },
          {
            opcode: "showfullscreen",
            blockType: Scratch.BlockType.COMMAND,
            text: "Show fullscreen ad",
          },
          "---",
          {
            opcode: "whenRewardedWatched",
            blockType: Scratch.BlockType.HAT,
            func: "isRewardedWatched",
            text: "When rewarded ad shown",
          },
          {
            opcode: "rewardedRewarded",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Did Rewarded Ad give reward?",
          },
          {
            opcode: "showrewarded",
            blockType: Scratch.BlockType.COMMAND,
            text: "Show rewarded ad",
          },
          "---",
          {
            opcode: "whenRateGame",
            blockType: Scratch.BlockType.HAT,
            func: "isRateGame",
            text: "When rete game",
          },
          {
            opcode: "canRateGame",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Can rate game?",
          },
          {
            opcode: "openRatePopup",
            blockType: Scratch.BlockType.COMMAND,
            text: "Open Rating Popup",
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: "Device info",
          },
          {
            opcode: "getDeviceType",
            blockType: Scratch.BlockType.REPORTER,
            text: "device type",
          },
          {
            opcode: "isDeviceType",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is playing on [DEVICE] ?",
            arguments: {
              DEVICE: {
                type: Scratch.ArgumentType.STRING,
                menu: "DEVICE_TYPE",
              },
            },
          },
        ],
        menus: {
          VARS: {
            acceptReporters: false,
            items: variables,
          },
          DEVICE_TYPE: {
            acceptReporters: false,
            items: ["desktop", "mobile", "tablet", "tv"],
          },
        },
      };
    }

    isSDK() {
      if (isEditor()) {
        return editor_is_sdk;
      }
      return isSDK();
    }
    trySDK() {
      if (isEditor() && !editor_is_sdk) {
        editor_is_sdk = true;
        alert(messages.connecting + "\n\n" + message_ending);
      } else if (!isSDK()) {
        loadSDK();
      }
    }

    setVar(args) {
      window.ysdkdata[args.NAME] = args.VALUE;
    }
    getVar(args) {
      return window.ysdkdata[args.NAME];
    }

    dataloaded() {
      return window.ysdkplayer != undefined && window.ysdkdata != undefined;
    }
    async loadvars() {
      if (window.ysdkdebug != true) {
        if (window.ysdkplayer != undefined) {
          var data = await window.ysdkplayer.getData();
          window.ysdkdata = data;
          console.log("Succesfully loaded data!");
        }
      } else {
        window.ysdkdata = {};
      }
    }
    savevars() {
      if (
        window.ysdkplayer != undefined &&
        window.ysdkdata != undefined &&
        window.savedData !== JSON.stringify(window.ysdkdata)
      )
        window.ysdkplayer.setData(window.ysdkdata, true).then(() => {
          window.savedData = JSON.stringify(window.ysdkdata);
          console.log("Successfully saved data!");
        });
    }
    resetprogress() {
      window.ysdkdata = {};
      if (
        window.ysdkplayer != undefined &&
        window.ysdkdata != undefined &&
        window.savedData !== JSON.stringify(window.ysdkdata)
      )
        window.ysdkplayer.setData(window.ysdkdata, true).then(() => {
          window.savedData = JSON.stringify(window.ysdkdata);
          console.log("Successfully saved data!");
        });
    }

    fullscreenClosed() {
      return window.isfullscreenclosed == true;
    }
    showfullscreen() {
      window.isfullscreenclosed = false;
      window.isAdOpened = true;
      Scratch.vm.runtime.audioEngine.inputNode.gain.value = 0;
      if (window.ysdkdebug == true) {
        alert(messages.fullscreen_ad + "\n\n" + message_ending);
        window.isfullscreenclosed = true;
        Scratch.vm.runtime.audioEngine.inputNode.gain.value = 1;
        window.triggerIFC = true;
        window.isAdOpened = false;
        return;
      }
      if (window.ysdk != undefined) {
        window.ysdk.adv.showFullscreenAdv({
          callbacks: {
            onClose: function (wasShown) {
              window.isfullscreenclosed = true;
              window.triggerIFC = true;
              window.isAdOpened = false;
              Scratch.vm.runtime.audioEngine.inputNode.gain.value = 1;
            },
            onError: function (error) {
              window.isfullscreenclosed = false;
              window.triggerIFC = true;
              window.isAdOpened = false;
            },
          },
        });
      }
    }

    rewardedRewarded() {
      return window.isrewarded == true;
    }
    showrewarded() {
      window.isrewardedwatched = false;
      window.isrewarded = false;
      window.isAdOpened = true;
      this.deafAE();
      if (window.ysdkdebug == true) {
        var pr = confirm(messages.rewarded_ad + "\n\n" + message_ending);
        if (pr) {
          window.isrewardedwatched = true;
          window.isrewarded = true;
        } else {
          window.isrewardedwatched = true;
          window.isrewarded = false;
        }
        window.isAdOpened = false;
        this.triggerIRW();
      }
      window.ysdk.adv.showRewardedVideo({
        callbacks: {
          onOpen: () => {
            window.isrewardedwatched = false;
            window.isrewarded = false;
          },
          onRewarded: () => {
            window.isrewarded = true;
            window.isAdOpened = false;
            this.triggerIRW();
          },
          onClose: () => {
            window.isrewardedwatched = true;
            window.isAdOpened = false;
            this.undeafAE();
            this.triggerIRW();
          },
          onError: (e) => {
            window.isrewardedwatched = false;
            window.isrewarded = false;
            window.isAdOpened = false;
          },
        },
      });
    }

    canRateGame() {
      if (window.ysdkdebug == true) {
        return !(window.alreadyrated == true);
      }
      var can;
      ysdk.feedback.canReview().then(({ value, reason }) => {
        can = value;
      });
      return can;
    }
    openRatePopup() {
      if (window.ysdkdebug == true) {
        window.alreadyrated = true;
        alert(messages.rate_game + "\n\n" + message_ending);
        return;
      }
      ysdk.feedback.requestReview();
    }

    getDeviceType() {
      if (isEditor() && editor_is_sdk) {
        return "desktop";
      } else if (isSDK()) {
        return ysdk.deviceInfo.type;
      }
      return "";
    }
    isDeviceType(args) {
      const device = cast.toString(args.DEVICE).toLowerCase();
      if (isEditor() && editor_is_sdk) {
        return device === "desktop";
      } else if (isSDK()) {
        return device === ysdk.deviceInfo.type;
      }
      return false;
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
